function loadSources() {
  fetch(SOURCES_URL)
    .then(response => response.json())
    .then(json => json.sources)
    .then(sources => sources.map(renderSourceElement));
}
