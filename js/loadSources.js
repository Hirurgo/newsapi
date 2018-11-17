import { SOURCES_URL } from './constants.js';
import renderSourceElement from './renderSourceElement.js';

export default function loadSources() {
  fetch(SOURCES_URL)
    .then(response => response.json())
    .then(json => json.sources)
    .then(sources => sources.map(renderSourceElement));
}
