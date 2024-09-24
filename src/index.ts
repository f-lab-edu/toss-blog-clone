import './style/style.css'
import './style/header.css'
import './style/content.css'
import './style/footer.css'
import ListView from './view/ListView';

const contents = document.querySelector('.contents--main');
const listView = new ListView(contents);

window.requestAnimationFrame(() => {
  if (contents) {
    listView.render();
  }
})
