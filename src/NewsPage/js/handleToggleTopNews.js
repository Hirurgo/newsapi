import { SOURCE_SELECTOR } from '../../constants';
import loadNews from './loadNews';
import errorManager from '../../errorManager';

const noSourceSelecterError = new errorManager('Need to select source before');

export default function handleToggleTopNews(event) {
  if (SOURCE_SELECTOR.selectedIndex === 0) {
    event.preventDefault();
    SOURCE_SELECTOR.classList.add('error');
    noSourceSelecterError.drop();
    setTimeout(() => SOURCE_SELECTOR.classList.remove('error'), 1000);
  } else {
    loadNews();
  }
}
  