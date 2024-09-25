import View from '../../type/View';

class FooterView extends View {
  getTemplate() {
    return `<footer class="footer">
              <div class="footer--link_group"></div>
              <span class="footer--copyright">㈜비바리퍼블리카 Copyright © Viva Republica, Inc. All Rights Reserved.</span>
            </footer>`;
  }
}

export default FooterView;
