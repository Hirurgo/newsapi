import { SOURCES_SELECTOR } from './constants.js';

export const renderSourceElement = source => {
  const { name, id } = source;
  
  const sourceElement = document.createElement('option');
  sourceElement.label = name;
  sourceElement.innerHTML = name;
  sourceElement.value = id;

  SOURCES_SELECTOR.appendChild(sourceElement)
}
