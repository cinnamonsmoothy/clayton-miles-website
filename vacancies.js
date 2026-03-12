// Google Sheet config
const SHEET_ID = '1XkBqfJuQRHtirdFwm_iy3Qpy9EYsrreaAlstyup5guY';
const SHEET_NAME = 'clayton_vacancies';

// SVG Icons
const icons = {
    location: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    salary: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    schedule: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`
};

let vacanciesData = [];

// Parse CSV text into array of objects
function parseCSV(csv) {
    const lines = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < csv.length; i++) {
        const ch = csv[i];
        if (ch === '"') {
            if (inQuotes && csv[i + 1] === '"') { current += '"'; i++; }
            else { inQuotes = !inQuotes; }
        } else if ((ch === '\n' || ch === '\r') && !inQuotes) {
            if (current.trim()) lines.push(current);
            current = '';
            if (ch === '\r' && csv[i + 1] === '\n') i++;
        } else {
            current += ch;
        }
    }
    if (current.trim()) lines.push(current);
    if (lines.length < 2) return [];

    function splitRow(row) {
        const fields = [];
        let field = '';
        let q = false;
        for (let i = 0; i < row.length; i++) {
            const c = row[i];
            if (c === '"') { if (q && row[i + 1] === '"') { field += '"'; i++; } else { q = !q; } }
            else if (c === ',' && !q) { fields.push(field); field = ''; }
            else { field += c; }
        }
        fields.push(field);
        return fields;
    }

    const headers = splitRow(lines[0]).map(h => h.trim().toLowerCase().replace(/\s+/g, '_'));
    return lines.slice(1).map(line => {
        const values = splitRow(line);
        const obj = {};
        headers.forEach((h, i) => { obj[h] = (values[i] || '').trim(); });
        return obj;
    });
}

// Fetch vacancies — uses a <script> tag trick to completely avoid CORS
function fetchVacancies() {
    const loading = document.getElementById('loading');

    // Google Visualization API URL — returns JSONP-like response (no CORS block)
    const gvizUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${SHEET_NAME}`;

    // Inject a hidden iframe to fetch the CSV (bypasses CORS from file://)
    // Actually — the simplest approach: just load via a script that sets a global
    // We'll use the gviz JSON endpoint and parse it from a <script> tag

    const script = document.createElement('script');
    script.src = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json;responseHandler:handleSheetData&sheet=${SHEET_NAME}`;

    // This global function gets called by the script tag
    window.handleSheetData = function (data) {
        try {
            const rows = data.table.rows;
            if (!rows || rows.length === 0) {
                loading.textContent = 'No vacancies available at the moment.';
                return;
            }

            // Check if cols have labels
            const colLabels = data.table.cols.map(c => (c.label || '').trim().toLowerCase().replace(/\s+/g, '_'));
            const hasLabels = colLabels.some(l => l.length > 0);

            let headers, dataRows;
            if (hasLabels) {
                headers = colLabels;
                dataRows = rows;
            } else {
                headers = rows[0].c.map(cell => cell ? String(cell.v || '').trim().toLowerCase().replace(/\s+/g, '_') : '');
                dataRows = rows.slice(1);
            }

            const allRows = dataRows.map(row => {
                const obj = {};
                row.c.forEach((cell, i) => {
                    if (headers[i]) {
                        obj[headers[i]] = cell ? (cell.v != null ? String(cell.v) : '') : '';
                    }
                });
                return obj;
            });

            // Filter out filled vacancies
            vacanciesData = allRows.filter(v => {
                const filled = (v.vacancy_filled || '').toString().toLowerCase().trim();
                return filled !== 'true' && filled !== 'yes' && filled !== '1';
            });

            if (vacanciesData.length === 0) {
                loading.textContent = 'No vacancies available at the moment.';
                return;
            }

            loading.style.display = 'none';
            renderVacancies();
        } catch (err) {
            console.error('Error parsing vacancies:', err);
            loading.textContent = 'Unable to load vacancies. Please try again later.';
        }

        // Clean up
        document.body.removeChild(script);
    };

    script.onerror = function () {
        console.error('Failed to load sheet data');
        loading.textContent = 'Unable to load vacancies. Please try again later.';
        document.body.removeChild(script);
    };

    document.body.appendChild(script);
}

// Render vacancy cards
function renderVacancies() {
    const grid = document.getElementById('vacancies-grid');
    grid.innerHTML = '';
    
    vacanciesData.forEach((vacancy, index) => {
        const card = createVacancyCard(vacancy, index);
        grid.appendChild(card);
    });
}

// Create a vacancy card
function createVacancyCard(vacancy, index) {
    const card = document.createElement('div');
    card.className = 'vacancy-card';
    
    card.innerHTML = `
        <h3>${vacancy.job_title || 'Untitled Position'}</h3>
        <div class="vacancy-meta">
            <div class="vacancy-meta-item">
                ${icons.location}
                <span>${vacancy.location || 'Location not specified'}</span>
            </div>
            <div class="vacancy-meta-item">
                ${icons.salary}
                <span>${vacancy.salary || 'Salary not specified'}</span>
            </div>
            <div class="vacancy-meta-item">
                ${icons.schedule}
                <span>${vacancy.schedule || 'Full-time'}</span>
            </div>
        </div>
        <button class="view-details-btn">View Details</button>
    `;
    
    card.addEventListener('click', () => openModal(vacancy));
    
    return card;
}

// Open modal with vacancy details
function openModal(vacancy) {
    const modal = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalMeta = document.getElementById('modal-meta');
    const modalDescription = document.getElementById('modal-description');
    const modalRequirements = document.getElementById('modal-requirements');
    const applyBtn = document.getElementById('apply-btn');
    
    // Set title
    modalTitle.textContent = vacancy.job_title || 'Untitled Position';
    
    // Set meta information
    modalMeta.innerHTML = `
        <div class="modal-meta-item">
            ${icons.location}
            <div class="modal-meta-item-content">
                <strong>Location</strong>
                <span>${vacancy.location || 'Not specified'}</span>
            </div>
        </div>
        <div class="modal-meta-item">
            ${icons.salary}
            <div class="modal-meta-item-content">
                <strong>Salary</strong>
                <span>${vacancy.salary || 'Not specified'}</span>
            </div>
        </div>
        <div class="modal-meta-item">
            ${icons.schedule}
            <div class="modal-meta-item-content">
                <strong>Schedule</strong>
                <span>${vacancy.schedule || 'Full-time'}</span>
            </div>
        </div>
    `;
    
    // Set description
    modalDescription.textContent = vacancy.description || 'No description available';

    // Set requirements
    modalRequirements.innerHTML = '';
    if (vacancy.essential_requirements) {
        const requirements = vacancy.essential_requirements.split(',').map(req => req.trim());
        requirements.forEach(req => {
            if (req) {
                const li = document.createElement('li');
                li.textContent = req;
                modalRequirements.appendChild(li);
            }
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No specific requirements listed';
        modalRequirements.appendChild(li);
    }

    // Set apply button action
    applyBtn.onclick = () => {
        window.location.href = `mailto:zara@claytonmiles.cc?subject=Application for ${vacancy.job_title || 'Position'}&body=I would like to apply for the ${vacancy.job_title || 'position'}.`;
    };

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal-overlay');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Fetch vacancies on page load
    fetchVacancies();

    // Close modal button
    document.getElementById('modal-close').addEventListener('click', closeModal);

    // Close modal when clicking outside
    document.getElementById('modal-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'modal-overlay') {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

