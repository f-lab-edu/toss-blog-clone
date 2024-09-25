import Controller from '../type/Controller';
import BodyView from '../view/layout/BodyView';
import ListView from '../view/ListView';
import AsideListView from '../view/AsideListView';
import TrendModel from '../model/TrendModel';
import CommentModel from '../model/CommentModel';
import TagModel from '../model/TagModel';
import ListModel from '../model/ListModel';

class BodyController extends Controller {
  private bodyView: BodyView;
  private listView: ListView;
  private trendingList: AsideListView;
  private recentCommentsList: AsideListView;
  private tagList: AsideListView;
  private trendingData: TrendModel;
  private commentData: CommentModel;
  private tagData: TagModel;
  private listData: ListModel;

  constructor(className: string) {
    super();
    this.bodyView = new BodyView(className);
    this.listView = new ListView(".contents--main");
    this.trendingList = new AsideListView('.contents--aside');
    this.recentCommentsList = new AsideListView('.contents--aside');
    this.tagList = new AsideListView('.contents--aside');

    this.trendingData = new TrendModel();
    this.commentData = new CommentModel();
    this.tagData = new TagModel();
    this.listData = new ListModel();
  }

  render() {
    this.bodyView.render();

    this.listView.render({ data: this.listData.getAll() });

    this.trendingList.render({ title: "인기있는 글", type: "trend", data: this.trendingData.getAll() });
    this.recentCommentsList.render({ title: "최근 댓글", type: "comment", data: this.commentData.getAll() });
    this.tagList.render({ title: "태그", type: "tag", data: this.tagData.getAll() });
  }
}

export default BodyController
