const searchForm = document.querySelector('.search_form');
const searchTextBox = document.querySelector('.search_text_box');
const image = document.querySelector('.search_engine_image');

(function init() {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = `${searchTextBox?.value}`;
    searchTextBox.value = '';
  });
  const query = new URL(window.location.href).searchParams;
  const searchEngine = query.get('search_engine');
  image.src = `../../images/${searchEngine}.svg`;
})();
