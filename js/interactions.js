/* ==========================================================================
   ASIAN TIMES — WATCH SERVICING & REPAIR ATELIER (LOWER PAREL, MUMBAI)
   File: js/interactions.js
   Purpose: FAQ smooth accordion, timeline step highlights, and service prefill
   ========================================================================== */

export function initInteractions() {
  // 1. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');
    if (!trigger || !panel) return;

    // Open initial item if marked is-open
    if (item.classList.contains('is-open')) {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      trigger.setAttribute('aria-expanded', 'true');
    }

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close sibling items for clean editorial accordion experience
      faqItems.forEach((otherItem) => {
        const otherTrigger = otherItem.querySelector('.faq-trigger');
        const otherPanel = otherItem.querySelector('.faq-panel');
        if (otherItem !== item && otherItem.classList.contains('is-open')) {
          otherItem.classList.remove('is-open');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherPanel) otherPanel.style.maxHeight = '0px';
        }
      });

      item.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
      panel.style.maxHeight = !isOpen ? `${panel.scrollHeight}px` : '0px';
    });
  });

  // 2. Interactive Timeline Step Hover / Tap Highlight
  const timelineSteps = document.querySelectorAll('.timeline-step');
  timelineSteps.forEach((step) => {
    step.addEventListener('mouseenter', () => {
      timelineSteps.forEach((s) => s.classList.remove('is-active'));
      step.classList.add('is-active');
    });
    step.addEventListener('click', () => {
      timelineSteps.forEach((s) => s.classList.remove('is-active'));
      step.classList.add('is-active');
    });
  });
}
