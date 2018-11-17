import { MENU_TOGGLE_BUTTON, MENU } from './constants.js';

export default function togleMenu(event) {
  if (event) event.preventDefault();
  MENU.classList.toggle('show');
  MENU_TOGGLE_BUTTON.classList.toggle('active');
}
