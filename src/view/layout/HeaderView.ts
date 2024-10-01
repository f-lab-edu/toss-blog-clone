import View from '../../type/View';
import logo from '../../asset/images/logo.svg';

class HeaderView extends View {
  getTemplate() {
    return `<header class="header">
              <div class="header--logo">
                <img class="logo" src="${logo}" alt="logo">
              </div>
              <div class="header--menu"></div>
            </header>`;
  }
}

export default HeaderView;
