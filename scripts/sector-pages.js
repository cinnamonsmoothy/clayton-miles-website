document.addEventListener('DOMContentLoaded', () => {
    const rotatingRole = document.querySelector('[data-rotating-roles]');
    if (rotatingRole && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const roles = rotatingRole.dataset.rotatingRoles.split('|').filter(Boolean);
        let roleIndex = 0;
        if (roles.length > 1) {
            window.setInterval(() => {
                rotatingRole.classList.add('is-changing');
                window.setTimeout(() => {
                    roleIndex = (roleIndex + 1) % roles.length;
                    rotatingRole.textContent = roles[roleIndex];
                    rotatingRole.classList.remove('is-changing');
                }, 240);
            }, 2200);
        }
    }

    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('reveal-ready');
        const observer = new IntersectionObserver(
            entries => entries.forEach(entry => entry.target.classList.toggle('is-visible', entry.isIntersecting)),
            { threshold: 0.1 }
        );
        document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    }
});
