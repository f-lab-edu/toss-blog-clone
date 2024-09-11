import './style.css'
import './header.css'
import './content.css'
import './footer.css'
import view from './view';

const contents = document.querySelector('.contents--main');

window.requestAnimationFrame(() => {
  if (contents) {
    const newContent = view(contents);
    contents.replaceWith(newContent);
  }
})
