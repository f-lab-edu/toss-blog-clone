import './style/style.css';
import './style/header.css';
import './style/content.css';
import './style/footer.css';
import './style/button.css';
import './style/link.css';
import BodyController from './controller/BodyController';
import { createRouter } from './router';

createRouter([
  {
    path: '/',
    page: [{ page: BodyController, target: '.main' }],
  },
  {
    path: '/:category',
    page: [{ page: BodyController, target: '.main' }],
  },
  {
    path: '/article/:title',
    page: [{ page: BodyController, target: '.main' }],
  },
]);

window.requestAnimationFrame(() => {
  // controller 렌더링
  //new HeaderController('.main').init();
  //new footerController('.main').init();
});
