import View from '../../type/View';

class BodyView extends View {
  getTemplate() {
    return `<div class="contents">
              <section class="contents--title"></section>
              <section class="contents--container">
                <main class="contents--main"></main>
                <aside class="contents--aside"></aside>
              </section>
            </div>`;
  }
}

export default BodyView
