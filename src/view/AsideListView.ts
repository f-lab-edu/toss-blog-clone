import View from '../type/View';

interface AsideListViewProps {
  title: string;
}

class AsideListView extends View<AsideListViewProps> {
  getTemplate({ title }:AsideListViewProps) {
    return `<article>
          <span class="title">${title}</span>
          <ul class="list">
            <li>인기 글 아이템</li>
          </ul>
        </article>`;
  }
}

export default AsideListView;
