import View from '../../type/View';
import logo from '../../asset/images/logo.svg';

class HeaderView extends View {
  getTemplate() {
    return `<div class="header--container">
              <div class="header--logo">
                <img class="logo" src="${logo}" alt="logo">
              </div>
              <div class="header--menu"></div>
            </div>`;
  }
}

export default HeaderView;
