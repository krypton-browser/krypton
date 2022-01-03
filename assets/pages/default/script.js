const searchForm = document.querySelector('.search_form');
const searchTextBox = document.querySelector('.search_text_box');
const image = document.querySelector('.search_engine_image');

function isUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === 'http:' || url.protocol === 'https:';
}

(function init() {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const urlText = searchTextBox?.value;
    window.location.href = isUrl(urlText)
      ? urlText
      : `https://duckduckgo.com/?q=${encodeURI(urlText)}`;
    searchTextBox.value = '';
  });
  const query = new URL(window.location.href).searchParams;
  const searchEngine = query.get('search_engine');
  image.src = `../../images/${searchEngine}.svg`;
})();
