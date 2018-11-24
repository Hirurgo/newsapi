import '../css';
import '@babel/polyfill';
import 'whatwg-fetch';
import addListeners from './addListeners';
import loadSources from './loadSources';
import loadNews from './loadNews';

addListeners()
loadSources();
loadNews();
