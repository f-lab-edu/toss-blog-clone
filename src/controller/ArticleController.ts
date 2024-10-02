import Controller from '../type/Controller';
import { Route } from '../router';
import ListModel from '../model/ListModel';
import ArticleView from '../view/ArticleView';

class ArticleController extends Controller {
  private articleView: ArticleView;
  private listData: ListModel;
  private readonly keyword: string;

  constructor(className: string, route?: Route) {
    super(className, route);
    this.articleView = new ArticleView(className);

    this.listData = new ListModel();
    this.keyword = (route?.query as { keyword: string }).keyword;
  }

  render() {
    const articleData = this.listData.getItem(this.keyword);

    if (articleData) {
      this.articleView.render({ data: articleData });
    }
  }
}

export default ArticleController;
