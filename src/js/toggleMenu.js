import { MENU, MENU_TOGGLE_BUTTON } from './constants';

export default function toggleMenu(event) {
  if (event) event.preventDefault();
  MENU.classList.toggle('show');
  MENU_TOGGLE_BUTTON.classList.toggle('active');
}
