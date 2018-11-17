async function loadSources() {
  const response = await fetch(SOURCES_URL);
  const { sources } = await response.json();
  sources.map(renderSourceElement)
}
