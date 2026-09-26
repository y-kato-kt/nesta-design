/* Shared navigation and progressive enhancements. No dependencies. */
document.documentElement.classList.add('js');

const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const mobileQuery = window.matchMedia('(max-width: 700px)');

function setMenu(open, returnFocus = false) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  navigation.classList.toggle('is-open', open);
  header.classList.toggle('menu-active', open);
  document.body.classList.toggle('menu-open', open);
  // 開いているモバイルメニュー以外へフォーカスが移動しないようにする。
  document.querySelector('main').inert = open;
  document.querySelector('footer').inert = open;
  if (returnFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});
navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || !mobileQuery.matches) return;
  setMenu(false);
  const href = link.getAttribute('href');
  const destination = href.startsWith('#') ? document.querySelector(href) : null;
  if (destination) {
    destination.setAttribute('tabindex', '-1');
    destination.focus({ preventScroll: true });
    destination.addEventListener('blur', () => destination.removeAttribute('tabindex'), { once: true });
  }
});
document.addEventListener('keydown', (event) => {
  if (menuButton.getAttribute('aria-expanded') !== 'true') return;
  if (event.key === 'Escape') setMenu(false, true);
  if (event.key === 'Tab') {
    const focusable = [...header.querySelectorAll('a, button')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  }
});
mobileQuery.addEventListener('change', () => setMenu(false));

function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 35);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// 画面内の要素は隠さず、画面外の要素だけを一度ずつ表示。
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((element) => {
    if (element.getBoundingClientRect().top > window.innerHeight) {
      element.classList.add('is-pending');
      observer.observe(element);
    }
  });
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) {
      observer.disconnect();
      document.querySelectorAll('.is-pending').forEach((element) => element.classList.remove('is-pending'));
    }
  });
}

// 実在アカウントを持たないInstagramリンクのデモ案内。
const preview = document.querySelector('#page-preview');
document.querySelectorAll('[data-page]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#preview-description').textContent = 'Instagramの公式アカウントはありません。';
    preview.showModal();
  });
});

// Contact: ブラウザ内でのみ検証。ネットワーク送信・入力情報の保存は行わない。
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  const fields = [...contactForm.querySelectorAll('input, select, textarea')];
  const errorSummary = document.querySelector('#form-errors');
  let submitted = false;

  function validationMessage(field) {
    const value = field.value.trim();
    if (field.type === 'checkbox') return field.checked ? '' : 'プライバシーポリシーへの同意が必要です。';
    if (field.required && !value) return field.tagName === 'SELECT' ? 'お問い合わせ種別を選択してください。' : 'この項目を入力してください。';
    if (field.type === 'email' && value && field.validity.typeMismatch) return 'メールアドレスの形式を確認してください。';
    if (field.type === 'tel' && value) {
      const digitCount = value.replace(/\D/g, '').length;
      if (!/^\+?[0-9()\-\s]+$/.test(value) || digitCount < 7 || digitCount > 15) return '電話番号を7〜15桁の数字で入力してください。';
    }
    if (field.maxLength > 0 && value.length > field.maxLength) return `${field.maxLength}文字以内で入力してください。`;
    return '';
  }

  function validateField(field) {
    const message = validationMessage(field);
    const error = document.getElementById(`${field.id}-error`);
    field.setAttribute('aria-invalid', String(Boolean(message)));
    if (error) error.textContent = message;
    return message;
  }

  function updateSummary(invalidFields) {
    errorSummary.replaceChildren();
    errorSummary.hidden = invalidFields.length === 0;
    if (!invalidFields.length) return;
    const title = document.createElement('p');
    title.textContent = '入力内容をご確認ください。';
    const list = document.createElement('ul');
    invalidFields.forEach((field) => {
      const item = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = `#${field.id}`;
      anchor.textContent = field.labels[0].textContent.replace(/必須|任意/g, '').trim();
      anchor.addEventListener('click', (event) => { event.preventDefault(); field.focus(); });
      item.append(anchor);
      list.append(item);
    });
    errorSummary.append(title, list);
  }

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitted = true;
    fields.forEach((field) => { if (field.type !== 'checkbox') field.value = field.value.trim(); });
    const invalidFields = fields.filter((field) => validateField(field));
    updateSummary(invalidFields);
    if (invalidFields.length) {
      errorSummary.focus();
      return;
    }
    contactForm.reset();
    contactForm.hidden = true;
    const success = document.querySelector('#form-success');
    success.hidden = false;
    success.focus();
  });

  contactForm.addEventListener('input', (event) => {
    if (!submitted || !fields.includes(event.target)) return;
    validateField(event.target);
    updateSummary(fields.filter((field) => validationMessage(field)));
  });
  contactForm.querySelector('[type="submit"]').disabled = false;
}
preview.addEventListener('click', (event) => {
  if (event.target !== preview) return;
  const bounds = preview.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) preview.close();
});
