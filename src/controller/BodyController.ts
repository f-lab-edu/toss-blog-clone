import Controller from '../type/Controller';
import BodyView from '../view/layout/BodyView';
import ListView from '../view/ListView';
import AsideListView from '../view/AsideListView';
import TrendModel from '../model/TrendModel';
import CommentModel from '../model/CommentModel';
import TagModel from '../model/TagModel';
import ListModel from '../model/ListModel';
import { isHTMLElement } from '../validation';

export type Category = 'all' | 'develop' | 'design';

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
  private selectedTag: string[];
  private selectedCategory: Category;

  constructor(className: string) {
    super();
    this.bodyView = new BodyView(className);
    this.listView = new ListView('.contents--main');
    this.trendingList = new AsideListView('.contents--aside');
    this.recentCommentsList = new AsideListView('.contents--aside');
    this.tagList = new AsideListView('.contents--aside');

    this.trendingData = new TrendModel();
    this.commentData = new CommentModel();
    this.tagData = new TagModel();
    this.listData = new ListModel();

    // TODO: 추후 query String 또는 URL 값을 통해 처리 필요
    this.selectedCategory = 'all';
    this.selectedTag = [];
  }

  eventBinding() {
    this.tagList.bindTagClick(this.tagClickHandler.bind(this));
  }

  tagClickHandler({ target }: Event) {
    if (isHTMLElement(target) && target.classList.contains('aside-tag--item')) {
      const tag = target.dataset.tag as string;
      const index = this.selectedTag.indexOf(tag);

      if (index > -1) {
        this.selectedTag.splice(index, 1);
      } else {
        this.selectedTag.push(tag);
      }

      this.listView.render({
        data: this.listData.getList(this.selectedCategory, this.selectedTag),
      });
    }
  }

  render() {
    this.bodyView.render();

    this.listView.render({
      data: this.listData.getList(this.selectedCategory, this.selectedTag),
    });

    this.trendingList.render({
      title: '인기있는 글',
      type: 'trend',
      data: this.trendingData.getAll(),
    });
    this.recentCommentsList.render({
      title: '최근 댓글',
      type: 'comment',
      data: this.commentData.getAll(),
    });
    this.tagList.render({
      title: '태그',
      type: 'tag',
      data: this.tagData.getAll(),
    });
  }
}

export default BodyController;
