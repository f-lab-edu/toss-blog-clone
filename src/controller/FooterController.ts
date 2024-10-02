import Controller from '../type/Controller';
import FooterView from '../view/layout/FooterView';
import LinkView from '../view/LinkView';
import { Route } from '../router';

class FooterController extends Controller {
  private footerView: FooterView;
  private homeLinkView: LinkView;
  private teamLinkView: LinkView;
  private careerLinkView: LinkView;
  private faqLinkView: LinkView;

  constructor(className: string, route?: Route) {
    super(className, route);
    this.footerView = new FooterView(className);

    this.homeLinkView = new LinkView('.footer--link_group');
    this.teamLinkView = new LinkView('.footer--link_group');
    this.careerLinkView = new LinkView('.footer--link_group');
    this.faqLinkView = new LinkView('.footer--link_group');
  }

  render() {
    this.footerView.render();

    this.homeLinkView.render({ content: '홈페이지' });
    this.teamLinkView.render({ content: '회사소개', href: 'https://toss.im/' });
    this.careerLinkView.render({
      content: '채용',
      href: 'https://toss.im/team',
    });
    this.faqLinkView.render({
      content: '고객센터: 1599-4905',
      href: 'https://toss.im/career/faq?category=0',
    });
  }
}

export default FooterController;
