import './style/style.css';
import './style/header.css';
import './style/content.css';
import './style/footer.css';
import './style/button.css';
import './style/link.css';
import HeaderController from './controller/HeaderController';
import BodyController from './controller/BodyController';
import footerController from './controller/FooterController';
import { createRouter } from './router';

const router = createRouter([
  {
    path: '/',
    page: [new BodyController('.main')],
  },
  {
    path: '/develop',
    page: [new BodyController('.main')],
  },
  {
    path: '/design',
    page: [new BodyController('.main')],
  },
  {
    path: '/article/:title/:title1',
    page: [new BodyController('.main')],
  },
]);

console.log(router);

window.requestAnimationFrame(() => {
  // controller 렌더링
  new HeaderController('.main').init();
  new footerController('.main').init();
});
