function switchLanguage(lang) {
  document.querySelectorAll('.lang.zh').forEach(el => {
    el.style.display = lang === 'zh' ? 'inline' : 'none';
  });
  document.querySelectorAll('.lang.en').forEach(el => {
    el.style.display = lang === 'en' ? 'inline' : 'none';
  });
}
