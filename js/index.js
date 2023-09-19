/* Редирект на слоты в зависимости от устройства*/
function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || 
  (navigator.userAgent.indexOf('IEMobile') !== -1) ||
  (window.matchMedia("(max-width: 1023px)").matches);
}

function getRedirectLink() {
  if (isMobileDevice()) {
      // Если устройство мобильное
      return "https://bilbet.com/casino/2796827";
  } else {
      // Если устройство десктопное
      return "https://bilbet.com/casino/2796826";
  }
}

document.getElementById("redirectButton").href = getRedirectLink();

/* Отображать текущий год*/

const copyright = document.querySelector('.footer__copyright');
const date = new Date;

copyright.innerHTML = '';

if (copyright) {
  copyright.innerHTML = `Copyright ${date.getFullYear()}`
} else {
  copyright.innerHTML = 'Copyright 2023'
}


/* Модальное окно*/

const modalWrap = document.querySelector('.modal__wrap');
const btnRules = document.querySelector('.button__rules');
const modalCloseBtn = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');

btnRules.addEventListener('click', function(){
  modalWrap.classList.add('_active')
  document.body.style.height = "100vh"
})

function closeModal() {
  modalWrap.classList.remove('_active');
  document.body.style.height = "unset"
}

modalCloseBtn.addEventListener('click', closeModal);

document.addEventListener('click', function(event) {
  if (!modal.contains(event.target) && !event.target.classList.contains('button__rules')) {
    closeModal();
  }
});

/* Гет параметры для регистрации*/
const currentURL = window.location.href;
const queryString = currentURL.split('?')[1];
const params = new URLSearchParams(queryString);

const clickId = params.get('click_id');

const partnerId = params.get('partner_id');

function getRegistrationLink() {
  const baseLink = 'https://bilbet.com/registration';
  const linkWithParams =
    (clickId ? `${baseLink}?click_id=${clickId}` : baseLink) +
    (partnerId ? (clickId ? `&partner_id=${partnerId}` : `?partner_id=${partnerId}`) : '');

  return linkWithParams;
}

document.getElementById("registration__button").href = getRegistrationLink();