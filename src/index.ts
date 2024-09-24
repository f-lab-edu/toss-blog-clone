import './style/style.css'
import './style/header.css'
import './style/content.css'
import './style/footer.css'
import ListView from './view/ListView';
import AsideListView from './view/AsideListView';

const contents = document.querySelector('.contents--main');
const aside = document.querySelector('.contents--aside')

const listView = new ListView(contents);
const TrendingList = new AsideListView(aside);
const RecentCommentsList = new AsideListView(aside);

window.requestAnimationFrame(() => {
  if (contents && aside) {
    listView.render();
    TrendingList.render({ title: "인기있는 글" });
    RecentCommentsList.render({title: "최근 댓글"});
  }
})
