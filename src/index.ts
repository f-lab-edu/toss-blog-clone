import './style/style.css';
import './style/header.css';
import './style/content.css';
import './style/footer.css';
import './style/button.css';
import './style/link.css';
import HeaderController from './controller/HeaderController';
import BodyController from './controller/BodyController';
import footerController from './controller/FooterController';

window.requestAnimationFrame(() => {
  // controller 렌더링
  new HeaderController('.main').init();
  new BodyController('.main').init();
  new footerController('.main').init();
});
