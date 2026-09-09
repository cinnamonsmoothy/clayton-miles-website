class ClaytonMilesHeader extends HTMLElement {
    connectedCallback() {
        const vacanciesPage = document.body.classList.contains('vacancies-page');
        const desktopActions = vacanciesPage
            ? `<a class="header-action header-action-primary" href="mailto:zara@claytonmiles.cc?subject=Employer%20Recruitment%20Enquiry">Hire Staff</a>
               <a class="header-action header-action-secondary" href="#vacancy-list">Find Work</a>
               <a class="header-action header-action-whatsapp" href="https://wa.me/447355701322?text=Hi%20Clayton%20Miles%2C%20I%27d%20like%20to%20speak%20with%20your%20team." target="_blank" rel="noopener noreferrer">WhatsApp Us</a>`
            : `<button class="header-action header-action-primary" type="button" data-contact-modal="hire">Hire Staff</button>
               <button class="header-action header-action-secondary" type="button" data-contact-modal="find">Find Work</button>
               <a class="header-action header-action-whatsapp" href="https://wa.me/447355701322?text=Hi%20Clayton%20Miles%2C%20I%27d%20like%20to%20speak%20with%20your%20team." target="_blank" rel="noopener noreferrer">WhatsApp Us</a>`;
        const mobileActions = vacanciesPage
            ? `<a class="mobile-contact-button" href="mailto:zara@claytonmiles.cc?subject=Employer%20Recruitment%20Enquiry">Hire Staff</a>
               <a class="mobile-contact-button mobile-contact-button-secondary" href="#vacancy-list">Find Work</a>
               <a class="mobile-contact-button mobile-contact-button-whatsapp" href="https://wa.me/447355701322?text=Hi%20Clayton%20Miles%2C%20I%27d%20like%20to%20speak%20with%20your%20team." target="_blank" rel="noopener noreferrer">WhatsApp Us</a>`
            : `<button class="mobile-contact-button" type="button" data-contact-modal="hire">Hire Staff</button>
               <button class="mobile-contact-button mobile-contact-button-secondary" type="button" data-contact-modal="find">Find Work</button>
               <a class="mobile-contact-button mobile-contact-button-whatsapp" href="https://wa.me/447355701322?text=Hi%20Clayton%20Miles%2C%20I%27d%20like%20to%20speak%20with%20your%20team." target="_blank" rel="noopener noreferrer">WhatsApp Us</a>`;

        this.innerHTML = `
            <header class="site-header">
                <div class="header-inner">
                    <a class="logo" href="index.html" aria-label="Clayton Miles Recruitment home">
                        <img src="images/logo.png" alt="Clayton Miles Recruitment">
                    </a>
                    <div class="header-actions">${desktopActions}</div>
                    <button class="burger" type="button" aria-label="Open navigation" aria-expanded="false">
                        <span class="burger-line"></span><span class="burger-line"></span><span class="burger-line"></span>
                    </button>
                </div>
                <nav class="mobile-nav" aria-label="Mobile navigation">
                    <div class="mobile-nav-actions">${mobileActions}</div>
                </nav>
            </header>`;

        const burger = this.querySelector('.burger');
        const mobileNav = this.querySelector('.mobile-nav');
        const closeMenu = () => {
            burger.classList.remove('open');
            mobileNav.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
            burger.setAttribute('aria-label', 'Open navigation');
        };

        burger.addEventListener('click', () => {
            const open = burger.classList.toggle('open');
            mobileNav.classList.toggle('open', open);
            burger.setAttribute('aria-expanded', String(open));
            burger.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
        });
        mobileNav.querySelectorAll('a, button').forEach(control => control.addEventListener('click', closeMenu));
        document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    }
}

customElements.define('site-header', ClaytonMilesHeader);
