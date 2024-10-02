import Controller from '../type/Controller';
import HeaderView from '../view/layout/HeaderView';
import ButtonView from '../view/ButtonView';
import { move } from '../view/icons';
import { Route } from '../router';

class HeaderController extends Controller {
  private headerView: HeaderView;
  private slashButtonView: ButtonView;
  private simplicityButtonView: ButtonView;
  private subscribeButtonView: ButtonView;
  private careerButtonView: ButtonView;

  constructor(className: string, route?: Route) {
    super(className, route);
    this.headerView = new HeaderView(className);
    this.slashButtonView = new ButtonView('.header--menu');
    this.simplicityButtonView = new ButtonView('.header--menu');
    this.subscribeButtonView = new ButtonView('.header--menu');
    this.careerButtonView = new ButtonView('.header--menu');
  }

  render() {
    this.headerView.render();

    this.slashButtonView.render({
      content: 'SLASH',
      variant: 'white',
      suffix: move,
      color: 'gray',
    });
    this.simplicityButtonView.render({
      content: 'SIMPLICITY',
      variant: 'white',
      suffix: move,
      color: 'gray',
    });
    this.subscribeButtonView.render({ content: '구독하기' });
    this.careerButtonView.render({
      content: '채용 바로가기',
      variant: 'secondary',
      color: 'gray',
    });
  }
}

export default HeaderController;
