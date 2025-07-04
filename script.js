function switchLanguage(lang) {
  document.querySelectorAll('.lang.zh').forEach(el => {
    el.style.display = (lang === 'zh') ? 'block' : 'none';
  });
  document.querySelectorAll('.lang.en').forEach(el => {
    el.style.display = (lang === 'en') ? 'block' : 'none';
  });
}
