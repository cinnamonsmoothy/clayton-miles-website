class ClaytonMilesFooter extends HTMLElement {
    connectedCallback() {
        const compact = this.hasAttribute('compact');

        if (compact) {
            this.innerHTML = `
                <footer class="site-footer shared-site-footer shared-site-footer-compact">
                    <div class="home-container compact-footer-row">
                        <span>© 2026 Clayton Miles Recruitment</span>
                        <span>27 Old Gloucester Street, London, WC1N 3AX</span>
                        <nav aria-label="Footer navigation"><a href="/">Home</a><a href="contact.html">Contact</a></nav>
                    </div>
                </footer>`;
            return;
        }

        this.innerHTML = `
            <footer class="site-footer shared-site-footer">
                <div class="home-container footer-grid shared-footer-grid">
                    <div class="footer-brand">
                        <a href="/" aria-label="Clayton Miles Recruitment home"><img src="images/logo.png" alt="Clayton Miles Recruitment" width="292" height="87"></a>
                        <p>Specialist recruitment, thoughtfully matched.</p>
                    </div>
                    <nav class="footer-column" aria-label="Hire staff">
                        <h2>Hire staff</h2>
                        <a href="/#sectors">All sectors</a>
                        <a href="staffing-solutions.html?type=permanent">Permanent staffing</a>
                        <a href="staffing-solutions.html?type=temporary">Temporary staffing</a>
                    </nav>
                    <nav class="footer-column" aria-label="Sectors">
                        <h2>Sectors</h2>
                        <a href="healthcare-recruitment">Healthcare</a>
                        <a href="childrens-residential-care-recruitment">Children’s residential care</a>
                        <a href="social-care-recruitment">Adult social care</a>
                        <a href="hospitality-recruitment">Hospitality</a>
                        <a href="engineering-recruitment">Engineering</a>
                        <a href="logistics-transport-recruitment">Logistics & transport</a>
                        <a href="admin-hr-recruitment.html">Admin & HR</a>
                        <a href="automotive-recruitment">Automotive</a>
                        <a href="art-gallery-recruitment">Art & galleries</a>
                    </nav>
                    <nav class="footer-column" aria-label="Find work">
                        <h2>Find work</h2>
                        <a href="vacancies.html">Current vacancies</a>
                        <a href="mailto:zara@claytonmiles.cc?subject=CV%20Submission">Send your CV</a>
                    </nav>
                    <div class="footer-column">
                        <h2>Contact</h2>
                        <a href="contact.html">Contact page</a>
                        <a href="https://wa.me/447355701322?text=Hi%20Clayton%20Miles%2C%20I%27d%20like%20to%20speak%20with%20your%20team." target="_blank" rel="noopener noreferrer">WhatsApp us</a>
                        <a href="tel:+447355701322">07355 701322</a>
                        <a href="mailto:zara@claytonmiles.cc">zara@claytonmiles.cc</a>
                    </div>
                </div>
                <div class="home-container footer-bottom">
                    <span>© 2026 Clayton Miles Recruitment</span>
                    <span>27 Old Gloucester Street, London, WC1N 3AX</span>
                </div>
            </footer>`;
    }
}

customElements.define('site-footer', ClaytonMilesFooter);
