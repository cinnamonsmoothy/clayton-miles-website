class ClaytonMilesHeader extends HTMLElement {
    connectedCallback() {
        const iconSprite = `
            <svg class="site-icon-sprite" aria-hidden="true" width="0" height="0" focusable="false">
                <symbol id="user-plus" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></symbol>
                <symbol id="briefcase-business" viewBox="0 0 24 24"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></symbol>
                <symbol id="user-check" viewBox="0 0 24 24"><path d="m16 11 2 2 4-4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></symbol>
                <symbol id="refresh-cw" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></symbol>
                <symbol id="credit-card" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><path d="M6 14h2"/></symbol>
                <symbol id="clock-3" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/></symbol>
                <symbol id="calendar-clock" viewBox="0 0 24 24"><path d="M16 14v2.2l1.6 1"/><path d="M16 2v3"/><path d="M21 7.338V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2.338"/><path d="M3 9h5.859"/><path d="M8 2v3"/><circle cx="16" cy="16" r="6"/></symbol>
                <symbol id="search-check" viewBox="0 0 24 24"><path d="m8 11 2 2 4-4"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></symbol>
                <symbol id="users" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></symbol>
                <symbol id="stethoscope" viewBox="0 0 24 24"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></symbol>
                <symbol id="house-heart" viewBox="0 0 24 24"><path d="M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></symbol>
                <symbol id="heart-handshake" viewBox="0 0 24 24"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"/></symbol>
                <symbol id="concierge-bell" viewBox="0 0 24 24"><path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"/><path d="M20 16a8 8 0 1 0-16 0"/><path d="M12 4v4"/><path d="M10 4h4"/></symbol>
                <symbol id="cog" viewBox="0 0 24 24"><path d="M11 10.27 7 3.34"/><path d="m11 13.73-4 6.93"/><path d="M12 22v-2"/><path d="M12 2v2"/><path d="M14 12h8"/><path d="m17 20.66-1-1.73"/><path d="m17 3.34-1 1.73"/><path d="M2 12h2"/><path d="m20.66 17-1.73-1"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m3.34 7 1.73 1"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="12" r="8"/></symbol>
                <symbol id="truck" viewBox="0 0 24 24"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></symbol>
                <symbol id="car-front" viewBox="0 0 24 24"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/><path d="M7 14h.01"/><path d="M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2"/><path d="M19 18v2"/></symbol>
                <symbol id="images" viewBox="0 0 24 24"><path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/></symbol>
                <symbol id="chart-no-axes-combined" viewBox="0 0 24 24"><path d="M12 16v5"/><path d="M16 14.639V21"/><path d="M20 10.656V21"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18.463V21"/><path d="M8 14.656V21"/></symbol>
                <symbol id="shield-check" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></symbol>
                <symbol id="package" viewBox="0 0 24 24"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></symbol>
                <symbol id="warehouse" viewBox="0 0 24 24"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"/><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"/><path d="M6 13h12"/><path d="M6 17h12"/></symbol>
                <symbol id="shopping-basket" viewBox="0 0 24 24"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></symbol>
                <symbol id="factory" viewBox="0 0 24 24"><path d="M12 16h.01"/><path d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M8 16h.01"/></symbol>
                <symbol id="route" viewBox="0 0 24 24"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></symbol>
            </svg>`;

        const sectors = [
            {
                name: 'Healthcare',
                roles: ['Registered Nurse', 'Healthcare Assistant', 'Clinical Lead', 'Mental Health Nurse', 'Community Nurse', 'Practice Nurse', 'Nurse Practitioner', 'Theatre Nurse', 'Scrub Nurse', 'Recovery Nurse', 'ICU Nurse', 'A&E Nurse', 'Paediatric Nurse', 'Midwife', 'Occupational Therapist', 'Physiotherapist', 'Radiographer', 'Pharmacist', 'Pharmacy Technician', 'Clinical Services Manager']
            },
            { name: 'Children’s Residential Care', roles: ['Children’s Home Manager', 'Deputy Home Manager', 'Residential Support Worker', 'Senior Residential Support Worker', 'Team Leader', 'Waking Night Support Worker', 'Children’s Social Worker', 'Responsible Individual', 'Therapeutic Support Worker'] },
            { name: 'Adult Social Care & Care Homes', roles: ['Care Home Manager', 'Deputy Care Home Manager', 'Registered Manager', 'Nursing Home Manager', 'Care Assistant', 'Senior Care Assistant', 'Support Worker', 'Care Coordinator', 'Domiciliary Care Manager', 'Live-in Carer', 'Complex Care Support Worker', 'Activities Coordinator'] },
            { name: 'Hospitality', roles: ['Chef'] },
            { name: 'Engineering', roles: ['Maintenance Engineer'] },
            { name: 'Logistics & Transport', page: 'logistics-transport-recruitment', roles: ['HGV Driver', 'Class 1 HGV Driver', 'Class 2 HGV Driver', 'Delivery Driver', 'Warehouse Operative', 'Picker & Packer', 'Forklift Driver', 'Warehouse Supervisor', 'Warehouse Manager', 'Transport Planner', 'Logistics Coordinator', 'Fleet Manager'] },
            {
                name: 'Admin & HR',
                page: 'admin-hr-recruitment.html',
                roles: ['Administrator', 'Administrative Assistant', 'Office Administrator', 'Office Manager', 'Receptionist', 'Personal Assistant', 'Executive Assistant', 'Data Entry Clerk', 'Customer Service Administrator', 'Operations Administrator', 'Compliance Administrator', 'Contracts Administrator', 'Sales Administrator', 'HR Administrator', 'HR Coordinator', 'HR Advisor', 'HR Manager', 'HR Business Partner', 'Recruitment Coordinator', 'Talent Acquisition Specialist', 'Payroll Administrator', 'Learning & Development Coordinator', 'Medical Receptionist', 'GP Receptionist', 'Medical Administrator', 'Medical Secretary', 'Clinical Coder', 'Medical Summariser', 'Patient Services Advisor', 'Care Navigator', 'Referral Coordinator', 'Booking Coordinator', 'Ward Clerk', 'Health Records Clerk', 'Practice Manager']
            },
            { name: 'Automotive', roles: ['Vehicle Technician'] },
            { name: 'Art & Galleries', roles: ['Art Consultant', 'Art Sales Consultant', 'Gallery Manager', 'Gallery Assistant'] }
        ];

        const rolePages = {};
        const roleHref = (role, sector) => rolePages[role] || `role-recruitment.html?title=${encodeURIComponent(role)}&sector=${encodeURIComponent(sector)}`;
        const chevron = `<svg viewBox="0 0 12 8" aria-hidden="true"><path d="m1 1 5 5 5-5"/></svg>`;
        const sectorItems = prefix => sectors.map(({ name, page }, index) => `
            <li class="sector-menu-item">
                ${page
                    ? `<a class="sector-menu-toggle" href="${page}" aria-expanded="false" aria-controls="${prefix}-role-${index}"><span>${name}</span><span aria-hidden="true">→</span></a>`
                    : `<button class="sector-menu-toggle" type="button" aria-expanded="false" aria-controls="${prefix}-role-${index}"><span>${name}</span><span aria-hidden="true">→</span></button>`}
            </li>`).join('');
        const roleItems = prefix => sectors.map(({ name, roles }, index) => `
            <div class="role-menu" id="${prefix}-role-${index}">
                <div class="role-link-grid">
                    ${roles.map(role => `<a href="${roleHref(role, name)}"><span>${role}</span></a>`).join('')}
                </div>
            </div>`).join('');

        const hireMenu = prefix => `
            <div class="mega-menu mega-menu-hire" id="${prefix}-hire-menu">
                <div class="mega-menu-inner mega-menu-hierarchy">
                    <div class="menu-level menu-level-primary">
                        <p class="mega-menu-label">Hire staff</p>
                        <button class="menu-level-current" type="button" aria-expanded="false" aria-controls="${prefix}-sector-list">Sectors <span aria-hidden="true">→</span></button>
                        <a href="staffing-solutions.html?type=permanent"><span>Permanent staffing solutions</span></a>
                        <a href="staffing-solutions.html?type=temporary"><span>Temporary staffing solutions</span></a>
                    </div>
                    <div class="menu-level menu-level-sectors" id="${prefix}-sector-list">
                        <p class="mega-menu-label">Sectors</p>
                        <ul class="sector-menu-grid">${sectorItems(prefix)}</ul>
                    </div>
                    <div class="menu-level menu-level-roles">
                        <p class="mega-menu-label">Job titles</p>
                        ${roleItems(prefix)}
                    </div>
                </div>
            </div>`;

        const findMenu = prefix => `
            <div class="mega-menu mega-menu-find" id="${prefix}-find-menu">
                <div class="mega-menu-inner">
                    <div class="mega-menu-intro">
                        <h2>Your next move starts here.</h2>
                        <p>Browse current roles or send your CV directly to our recruitment team.</p>
                    </div>
                    <div class="candidate-menu-links">
                        <a href="vacancies.html"><span><strong>View current vacancies</strong><small>Explore every live opportunity</small></span></a>
                        <a href="mailto:zara@claytonmiles.cc?subject=CV%20Submission"><span><strong>Send your CV</strong><small>Introduce yourself to our team</small></span></a>
                    </div>
                </div>
            </div>`;

        const menuControls = prefix => `
            <div class="header-menu-item" data-header-menu="hire">
                <button class="header-menu-trigger" type="button" aria-expanded="false" aria-controls="${prefix}-hire-menu">Hire Staff ${chevron}</button>
                ${hireMenu(prefix)}
            </div>
            <div class="header-menu-item" data-header-menu="find">
                <button class="header-menu-trigger" type="button" aria-expanded="false" aria-controls="${prefix}-find-menu">Find Work ${chevron}</button>
                ${findMenu(prefix)}
            </div>`;

        const whatsapp = `<a class="header-action header-action-whatsapp" href="https://wa.me/447355701322?text=Hi%20Clayton%20Miles%2C%20I%27d%20like%20to%20speak%20with%20your%20team." target="_blank" rel="noopener noreferrer">WhatsApp Us</a>`;
        const contact = `<a class="header-text-link" href="contact.html">Contact</a>`;

        this.innerHTML = `${iconSprite}
            <header class="site-header">
                <div class="header-inner">
                    <a class="logo" href="/" aria-label="Clayton Miles Recruitment home">
                        <img src="images/logo.png" alt="Clayton Miles Recruitment">
                    </a>
                    <nav class="header-actions" aria-label="Primary navigation">
                        ${menuControls('desktop')}
                        ${contact}
                        ${whatsapp}
                    </nav>
                    <button class="burger" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-navigation">
                        <span class="burger-line"></span><span class="burger-line"></span><span class="burger-line"></span>
                    </button>
                </div>
                <nav class="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
                    <div class="mobile-nav-actions">
                        ${menuControls('mobile')}
                        ${contact}
                        ${whatsapp}
                    </div>
                </nav>
                <aside class="employer-scroll-banner" aria-hidden="true">
                    <p><span class="employer-banner-desktop">If you are <strong>an employer</strong> looking to make a temporary or permanent hire, please call <a href="tel:+447355701322">07355 701322</a> to speak directly with our friendly team.</span><span class="employer-banner-mobile"><strong>Employers:</strong> call <a href="tel:+447355701322">07355 701322</a> to speak with our friendly team.</span></p>
                </aside>
            </header>`;

        const resolveLocalIconUses = () => {
            document.querySelectorAll('use[href^="images/lucide-icons.svg#"]').forEach(iconUse => {
                const iconId = iconUse.getAttribute('href').split('#')[1];
                iconUse.setAttribute('href', `#${iconId}`);
            });
        };

        const resolveLocalPageLinks = () => {
            const localHosts = new Set(['localhost', '127.0.0.1', '[::1]']);
            const usesStaticFileRoutes = window.location.protocol === 'file:' || localHosts.has(window.location.hostname);
            if (!usesStaticFileRoutes) return;

            const localRoutes = new Map([
                ['/', 'index.html'],
                ['/#sectors', 'index.html#sectors'],
                ['logistics-transport-recruitment', 'logistics-transport-recruitment.html']
            ]);

            document.querySelectorAll('a[href]').forEach(link => {
                const localHref = localRoutes.get(link.getAttribute('href'));
                if (localHref) link.setAttribute('href', localHref);
            });
        };

        const prepareDocumentAssets = () => {
            resolveLocalIconUses();
            resolveLocalPageLinks();
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', prepareDocumentAssets, { once: true });
        } else {
            prepareDocumentAssets();
        }

        const header = this.querySelector('.site-header');
        const burger = this.querySelector('.burger');
        const mobileNav = this.querySelector('.mobile-nav');
        const employerBanner = this.querySelector('.employer-scroll-banner');
        const desktopItems = [...this.querySelectorAll('.header-actions > .header-menu-item')];
        let closeTimer;
        let lastScrollY = Math.max(window.scrollY, 0);
        let scrollTicking = false;

        const setEmployerBanner = visible => {
            header.classList.toggle('show-employer-banner', visible);
            employerBanner.setAttribute('aria-hidden', String(!visible));
        };

        const updateEmployerBanner = () => {
            const currentScrollY = Math.max(window.scrollY, 0);
            const firstBanner = document.querySelector('main > section:first-child');
            const bannerBottom = firstBanner
                ? firstBanner.getBoundingClientRect().bottom + currentScrollY
                : window.innerHeight;
            const movement = currentScrollY - lastScrollY;

            if (currentScrollY <= bannerBottom) {
                setEmployerBanner(false);
            } else if (movement > 4 && !mobileNav.classList.contains('open')) {
                setEmployerBanner(true);
            } else if (movement < -4) {
                setEmployerBanner(false);
            }

            lastScrollY = currentScrollY;
            scrollTicking = false;
        };

        window.addEventListener('scroll', () => {
            if (scrollTicking) return;
            scrollTicking = true;
            window.requestAnimationFrame(updateEmployerBanner);
        }, { passive: true });
        window.addEventListener('resize', () => {
            setEmployerBanner(false);
            lastScrollY = Math.max(window.scrollY, 0);
        });

        const setMenu = (item, open) => {
            item.classList.toggle('is-open', open);
            item.querySelector(':scope > .header-menu-trigger').setAttribute('aria-expanded', String(open));
        };

        const resetHireMenu = menu => {
            if (!menu) return;
            menu.classList.remove('is-sector-open', 'has-active-role');
            menu.querySelector('.menu-level-current')?.setAttribute('aria-expanded', 'false');
            menu.querySelectorAll('.sector-menu-item').forEach(item => {
                item.classList.remove('is-active');
                item.querySelector('.sector-menu-toggle').setAttribute('aria-expanded', 'false');
            });
            menu.querySelectorAll('.role-menu').forEach(role => role.classList.remove('is-active'));
        };

        const closeDesktopMenus = () => desktopItems.forEach(item => {
            setMenu(item, false);
            resetHireMenu(item.querySelector('.mega-menu-hire'));
        });
        const openDesktopMenu = item => {
            window.clearTimeout(closeTimer);
            desktopItems.forEach(other => setMenu(other, other === item));
        };
        const scheduleDesktopClose = () => {
            window.clearTimeout(closeTimer);
            closeTimer = window.setTimeout(closeDesktopMenus, 180);
        };

        desktopItems.forEach(item => {
            const trigger = item.querySelector(':scope > .header-menu-trigger');
            item.addEventListener('mouseenter', () => openDesktopMenu(item));
            item.addEventListener('mouseleave', scheduleDesktopClose);
            trigger.addEventListener('focus', () => openDesktopMenu(item));
            trigger.addEventListener('click', () => {
                const willOpen = !item.classList.contains('is-open');
                closeDesktopMenus();
                if (willOpen) openDesktopMenu(item);
            });
        });
        this.querySelectorAll('.header-actions > :is(.header-text-link, .header-action-whatsapp)').forEach(link => link.addEventListener('focus', closeDesktopMenus));
        header.addEventListener('mouseenter', () => window.clearTimeout(closeTimer));
        header.addEventListener('mouseleave', scheduleDesktopClose);

        const closeMobileMenu = () => {
            burger.classList.remove('open');
            mobileNav.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
            burger.setAttribute('aria-label', 'Open navigation');
            this.querySelectorAll('.mobile-nav .header-menu-item.is-open').forEach(item => setMenu(item, false));
            this.querySelectorAll('.mobile-nav .mega-menu-hire').forEach(resetHireMenu);
        };

        burger.addEventListener('click', () => {
            const open = !mobileNav.classList.contains('open');
            if (open) setEmployerBanner(false);
            mobileNav.classList.toggle('open', open);
            burger.classList.toggle('open', open);
            burger.setAttribute('aria-expanded', String(open));
            burger.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
        });

        this.querySelectorAll('.mobile-nav > .mobile-nav-actions > .header-menu-item').forEach(item => {
            item.querySelector(':scope > .header-menu-trigger').addEventListener('click', () => {
                const open = !item.classList.contains('is-open');
                this.querySelectorAll('.mobile-nav .header-menu-item').forEach(other => {
                    if (other !== item && other.parentElement.classList.contains('mobile-nav-actions')) setMenu(other, false);
                });
                setMenu(item, open);
            });
        });

        this.querySelectorAll('.mega-menu-hire').forEach(menu => {
            const sectorsControl = menu.querySelector('.menu-level-current');
            const showSectors = () => {
                menu.classList.add('is-sector-open');
                sectorsControl.setAttribute('aria-expanded', 'true');
            };
            sectorsControl.addEventListener('mouseenter', showSectors);
            sectorsControl.addEventListener('focus', showSectors);
            sectorsControl.addEventListener('click', showSectors);
            menu.querySelectorAll('.menu-level-primary > a').forEach(link => {
                const clearLowerLevels = () => resetHireMenu(menu);
                link.addEventListener('mouseenter', clearLowerLevels);
                link.addEventListener('focus', clearLowerLevels);
            });
        });

        this.querySelectorAll('.sector-menu-toggle').forEach(toggle => {
            const activateRole = () => {
                const item = toggle.closest('.sector-menu-item');
                const menu = item.closest('.mega-menu');
                menu.classList.add('is-sector-open', 'has-active-role');
                menu.querySelector('.menu-level-current').setAttribute('aria-expanded', 'true');
                const items = [...menu.querySelectorAll('.sector-menu-item')];
                const index = items.indexOf(item);
                items.forEach((other, otherIndex) => {
                    const active = otherIndex === index;
                    other.classList.toggle('is-active', active);
                    other.querySelector('.sector-menu-toggle').setAttribute('aria-expanded', String(active));
                });
                menu.querySelectorAll('.role-menu').forEach((role, roleIndex) => role.classList.toggle('is-active', roleIndex === index));
            };
            toggle.addEventListener('mouseenter', activateRole);
            toggle.addEventListener('focus', activateRole);
            toggle.addEventListener('click', event => {
                event.stopPropagation();
                activateRole();
            });
        });

        this.querySelectorAll('.mega-menu a, .mobile-nav > .mobile-nav-actions > .header-action').forEach(link => link.addEventListener('click', closeMobileMenu));
        document.addEventListener('click', event => {
            if (!this.contains(event.target)) closeDesktopMenus();
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                closeDesktopMenus();
                closeMobileMenu();
            }
        });
    }
}

customElements.define('site-header', ClaytonMilesHeader);
