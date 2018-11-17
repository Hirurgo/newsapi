"use strict";

function cleanElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}