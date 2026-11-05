/* ==========================================================================
   ASIAN TIMES — WATCH SERVICING & REPAIR ATELIER (LOWER PAREL, MUMBAI)
   File: js/navigation.js
   Purpose: Sticky header state on scroll, accessible mobile drawer menu,
            and active navigation link highlighting
   ========================================================================== */

export function initNavigation() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer .btn');

  // 1. Sticky Header Scroll State
  const updateHeaderState = () => {
    if (!header) return;
    if (window.scrollY > 24) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', updateHeaderState, { passive: true });
  updateHeaderState();

  // 2. Mobile Drawer Toggle
  if (menuToggle && mobileDrawer) {
    const toggleDrawer = (forceClose = false) => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      const nextState = forceClose ? false : !isExpanded;

      menuToggle.setAttribute('aria-expanded', String(nextState));
      mobileDrawer.classList.toggle('is-open', nextState);
      document.body.style.overflow = nextState ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', () => toggleDrawer());

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => toggleDrawer(true));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
        toggleDrawer(true);
        menuToggle.focus();
      }
    });
  }
}
