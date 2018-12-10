import { NEWS_LIST } from '../../constants';

export default function redirectToArticleSource(event) {
  let { target } = event;

  while (target !== NEWS_LIST) {
    if (target.tagName === 'ARTICLE') {
      window.open(target.dataset.url);
      return;
    }
    target = target.parentNode;
  }
}
