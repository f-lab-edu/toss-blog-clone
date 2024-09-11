import './style/style.css'
import './style/header.css'
import './style/content.css'
import './style/footer.css'
import ListView from './view/ListView';
import { createElement } from './utils';

const listView = new ListView();

const contents = document.querySelector('.contents--main');

window.requestAnimationFrame(() => {
  if (contents) {
    createElement(contents, listView)
  }
})
