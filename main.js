(function () {
    'use strict';

    /* Theme toggle -------------------------------------------------------- */
    var root = document.documentElement;
    var toggle = document.getElementById('theme-toggle');
    var stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
        root.setAttribute('data-theme', stored);
    }

    function currentTheme() {
        var explicit = root.getAttribute('data-theme');
        if (explicit) return explicit;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    if (toggle) {
        toggle.addEventListener('click', function () {
            var next = currentTheme() === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }

    /* Mobile nav: close menu after a link is tapped ----------------------- */
    var navToggle = document.getElementById('nav-toggle');
    document.querySelectorAll('nav a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (navToggle) navToggle.checked = false;
        });
    });

    /* Scroll reveal --------------------------------------------------------- */
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var revealEls = document.querySelectorAll('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) {
        revealEls.forEach(function (el) { el.classList.add('visible'); });
    } else {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(function (el) { observer.observe(el); });
    }

    /* Active nav link on scroll --------------------------------------------- */
    var sections = document.querySelectorAll('main .section[id]');
    var navLinks = document.querySelectorAll('nav a[href^="#"]');
    if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
        var navObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var id = entry.target.getAttribute('id');
                var link = document.querySelector('nav a[href="#' + id + '"]');
                if (!link) return;
                if (entry.isIntersecting) {
                    navLinks.forEach(function (l) { l.classList.remove('active'); });
                    link.classList.add('active');
                }
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sections.forEach(function (section) { navObserver.observe(section); });
    }
})();
