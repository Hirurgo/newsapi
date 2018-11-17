MENU_TOGGLE_BUTTON.addEventListener('click', togleMenu);
NEWS_SECTION.addEventListener('click', redirectToArticleSource);
SOURCES_SELECTOR.addEventListener('change', loadNewsBySource);

loadSources();
loadNews();
