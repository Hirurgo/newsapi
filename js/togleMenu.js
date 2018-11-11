import { MENU_TOGGLE_BUTTON, MENU } from './constants.js';

export function togleMenu(event) {
    event && event.preventDefault();
    MENU.classList.toggle('show');
    MENU_TOGGLE_BUTTON.classList.toggle('active')
}