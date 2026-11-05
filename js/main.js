/* ==========================================================================
   ASIAN TIMES — WATCH SERVICING & REPAIR ATELIER (LOWER PAREL, MUMBAI)
   File: js/main.js
   Purpose: Main entry module initializing navigation, scroll animations,
            interactive components, and WhatsApp enquiry form
   ========================================================================== */

import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initInteractions } from './interactions.js';
import { initContactForm } from './contact-form.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAnimations();
  initInteractions();
  initContactForm();

  // Populate current copyright year if placeholder exists
  const yearSpans = document.querySelectorAll('[data-current-year]');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach((span) => {
    span.textContent = String(currentYear);
  });
});
