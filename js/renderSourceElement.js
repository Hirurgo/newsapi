"use strict";

function renderSourceElement(source) {
  var name = source.name,
      id = source.id;
  var sourceElement = document.createElement('option');
  sourceElement.label = name;
  sourceElement.innerHTML = name;
  sourceElement.value = id;
  SOURCE_SELECTOR.appendChild(sourceElement);
}