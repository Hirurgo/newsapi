import { SOURCES_URL } from '../../constants';
import renderSourceElement from './renderSourceElement';
import loadNewsManager from '../../LoadNewsManager';

export default async function loadSources() {
  const response = await loadNewsManager.getSources();
  const { sources } = await response.json();
  sources.map(renderSourceElement)
}
