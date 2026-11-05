/* ==========================================================================
   ASIAN TIMES — WATCH SERVICING & REPAIR ATELIER (LOWER PAREL, MUMBAI)
   File: js/contact-form.js
   Purpose: Enquiry form validation, query parameter prefilling, and
            formatted WhatsApp redirection to 919819451443
   ========================================================================== */

export const WHATSAPP_NUMBER = '919819451443';

export function buildWhatsAppUrl(details) {
  const lines = [
    'Hello Asian Times,',
    '',
    'I would like to enquire about watch servicing / repair at your Lower Parel studio.',
    '',
    `*Name:* ${details.fullName}`,
    `*Phone:* ${details.phone}`,
    `*Email:* ${details.email}`,
    `*Watch Brand / Model:* ${details.watchBrand || 'Not specified'}`,
    `*Service Required:* ${details.serviceRequired}`,
    `*Message:* ${details.message || 'Please let me know how we can proceed.'}`
  ];

  const encodedText = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
}

export function initContactForm() {
  const form = document.getElementById('asianTimesEnquiryForm');
  if (!form) return;

  const serviceSelect = form.querySelector('#serviceRequired');
  const statusBox = document.getElementById('enquiryFormStatus');

  // Pre-select service if ?service= query parameter is present
  try {
    const params = new URLSearchParams(window.location.search);
    const requestedService = params.get('service');
    if (requestedService && serviceSelect) {
      const match = Array.from(serviceSelect.options).find(
        (opt) => opt.value.toLowerCase() === requestedService.toLowerCase()
      );
      if (match) {
        serviceSelect.value = match.value;
      }
    }
  } catch (e) {
    // Ignore URL parsing issues in restricted environments
  }

  const validateField = (input) => {
    const group = input.closest('.form-group');
    const value = input.value.trim();
    let valid = true;

    if (input.hasAttribute('required') && !value) {
      valid = false;
    } else if (input.type === 'email' && value) {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (input.name === 'phone' && value) {
      valid = /^[+\d\s\-()]{7,18}$/.test(value);
    }

    input.classList.toggle('is-invalid', !valid);
    if (group) {
      group.classList.toggle('has-error', !valid);
    }
    return valid;
  };

  const inputs = form.querySelectorAll('.form-control');
  inputs.forEach((input) => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('is-invalid')) {
        validateField(input);
      }
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isFormValid = true;
    inputs.forEach((input) => {
      if (!validateField(input)) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const details = {
      fullName: form.fullName.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      watchBrand: form.watchBrand.value.trim(),
      serviceRequired: form.serviceRequired.value.trim(),
      message: form.message.value.trim()
    };

    const whatsappUrl = buildWhatsAppUrl(details);

    if (statusBox) {
      statusBox.innerHTML = `Your enquiry has been formatted for WhatsApp (<strong>+91 9819451443</strong>). Opening WhatsApp conversation&hellip; <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;color:var(--accent);margin-left:0.4rem;">Click here if it does not open automatically</a>.`;
      statusBox.classList.add('is-visible');
    }

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });
}
