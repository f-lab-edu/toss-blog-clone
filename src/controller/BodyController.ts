import Controller from '../type/Controller';
import BodyView from '../view/layout/BodyView';
import ListView from '../view/ListView';
import AsideListView from '../view/AsideListView';
import { trendingDummy } from '../dummy';

class BodyController extends Controller {
  private bodyView: BodyView;
  private listView: ListView;
  private trendingList: AsideListView;
  private recentCommentsList: AsideListView;
  private tagList: AsideListView;

  constructor(className: string) {
    super();
    this.bodyView = new BodyView(className);

    this.listView = new ListView(".contents--main");
    this.trendingList = new AsideListView('.contents--aside');
    this.recentCommentsList = new AsideListView('.contents--aside');
    this.tagList = new AsideListView('.contents--aside');
  }

  render() {
    this.bodyView.render();

    this.listView.render();
    this.trendingList.render({ title: "인기있는 글", type: "trend", data: trendingDummy });
    this.recentCommentsList.render({ title: "최근 댓글", type: "comment", data: [{}] });
    this.tagList.render({ title: "태그", type: "tag", data: [{}] });
  }
}

export default BodyController
