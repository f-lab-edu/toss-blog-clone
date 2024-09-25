import './style/style.css'
import './style/header.css'
import './style/content.css'
import './style/footer.css'
import './style/button.css'
import './style/link.css'
import ListView from './view/ListView';
import AsideListView from './view/AsideListView';
import LinkView from './view/LinkView';
import HeaderController from './controller/HeaderController';

const listView = new ListView('.contents--main');

const TrendingList = new AsideListView('.contents--aside');
const RecentCommentsList = new AsideListView('.contents--aside');

window.requestAnimationFrame(() => {
    listView.render();
    TrendingList.render({ title: "인기있는 글" });
    RecentCommentsList.render({title: "최근 댓글"});
    new LinkView('.contents--aside').render({ content: "홈페이지", href: "https://toss.im/" });

    // controller 렌더링
    new HeaderController('.main').init();
})
