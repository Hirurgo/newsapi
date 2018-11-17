MENU_TOGGLE_BUTTON.addEventListener('click', toggleMenu);
TOP_NEWS_TOGGLE_BUTTON.addEventListener('click', handleToggleTopNews);
SOURCE_SELECTOR.addEventListener('change', handleSelectSource);
NEWS_LIST.addEventListener('click', redirectToArticleSource);

loadSources();
loadNews();
