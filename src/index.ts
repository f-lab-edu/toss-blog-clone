import './style/style.css';
import './style/header.css';
import './style/content.css';
import './style/footer.css';
import './style/button.css';
import './style/link.css';
import BodyController from './controller/BodyController';
import { createRouter } from './router';
import HeaderController from './controller/HeaderController';
import footerController from './controller/FooterController';

window.requestAnimationFrame(() => {
  new HeaderController('.header').init();
  new footerController('.footer').init();

  createRouter([
    {
      path: '/',
      page: [{ page: BodyController, target: '.content' }],
    },
    {
      path: '/:category',
      page: [{ page: BodyController, target: '.content' }],
    },
    {
      path: '/article/:title',
      page: [{ page: BodyController, target: '.content' }],
    },
  ]);
});
