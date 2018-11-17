function renderSourceElement(source) {
  const { name, id } = source;

  const sourceElement = document.createElement('option');
  sourceElement.label = name;
  sourceElement.innerHTML = name;
  sourceElement.value = id;

  SOURCE_SELECTOR.appendChild(sourceElement);
}
