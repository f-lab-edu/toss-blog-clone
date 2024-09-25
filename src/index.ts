import './style/style.css'
import './style/header.css'
import './style/content.css'
import './style/footer.css'
import './style/button.css'
import './style/link.css'
import HeaderController from './controller/HeaderController';
import BodyController from './controller/BodyController';


window.requestAnimationFrame(() => {
    // new LinkView('.contents--aside').render({ content: "홈페이지", href: "https://toss.im/" });

    // controller 렌더링
    new HeaderController('.main').init();
    new BodyController('.main').init();
})
