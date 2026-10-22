const searchButton = document.getElementById('searchButton');
const searchPanel = document.getElementById('searchPanel');
const closeSearch = document.getElementById('closeSearch');
const keyword = document.getElementById('keyword');
function setSearch(open) {
  searchPanel.hidden = !open;
  searchButton.setAttribute('aria-expanded', String(open));
  if (open) keyword.focus();
  else searchButton.focus();
}
searchButton.addEventListener('click', () => setSearch(searchPanel.hidden));
closeSearch.addEventListener('click', () => setSearch(false));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !searchPanel.hidden) setSearch(false);
});
