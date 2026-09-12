const rolePages = {
    'registered-nurse': ['Registered Nurse', 'Healthcare'],
    'supported-housing-officer': ['Supported Housing Officer', 'Housing & Accommodation'],
    'chef': ['Chef', 'Hospitality'],
    'maintenance-engineer': ['Maintenance Engineer', 'Engineering'],
    'teaching-assistant': ['Teaching Assistant', 'Education'],
    'hgv-driver': ['HGV Driver', 'Logistics & Transport'],
    'office-administrator': ['Office Administrator', 'Admin & HR'],
    'vehicle-technician': ['Vehicle Technician', 'Automotive'],
    'paralegal': ['Paralegal', 'Finance & Legal']
};

const params = new URLSearchParams(window.location.search);
const pageType = document.body.dataset.landingPage;
let title;
let label;
let copy;

if (pageType === 'role') {
    const configuredRole = rolePages[params.get('role')];
    const role = params.get('title') || configuredRole?.[0] || 'Specialist';
    const sector = params.get('sector') || configuredRole?.[1] || 'Specialist recruitment';
    title = `${role} recruitment.`;
    label = sector;
    copy = `Our dedicated ${role.toLowerCase()} recruitment page is being prepared. In the meantime, tell us about your vacancy and we’ll start searching.`;
} else if (pageType === 'sector') {
    const sector = params.get('sector') || 'Specialist';
    title = `${sector} recruitment.`;
    label = 'Sector recruitment';
    copy = `Our dedicated ${sector.toLowerCase()} recruitment page is being prepared. In the meantime, tell us about your vacancy and we’ll start searching.`;
} else {
    const temporary = params.get('type') === 'temporary';
    title = `${temporary ? 'Temporary' : 'Permanent'} staffing solutions.`;
    label = 'Staffing solutions';
    copy = temporary
        ? 'Flexible recruitment support when demand changes quickly. This page is being prepared; speak to our team to start a search now.'
        : 'Focused recruitment for people who can make a lasting impact. This page is being prepared; speak to our team to start a search now.';
}

document.title = `${title} | Clayton Miles`;
document.querySelector('#landing-label').textContent = label;
document.querySelector('#landing-title').textContent = title;
document.querySelector('#landing-copy').textContent = copy;

const subject = encodeURIComponent(`${title.replace('.', '')} enquiry`);
const message = encodeURIComponent(`Hi Clayton Miles, I'd like to discuss ${title.toLowerCase()}`);
document.querySelector('#landing-email').href = `mailto:zara@claytonmiles.cc?subject=${subject}`;
document.querySelector('#landing-whatsapp').href = `https://wa.me/447355701322?text=${message}`;
