import View from '../type/View';
import { ListItem } from './AsideListView';

interface ListViewProps {
  data: ListItem[];
}

class ListView extends View<ListViewProps> {
  bindTabClick(handler: EventListener) {
    const tab = document.querySelector('.menu');

    if (tab) {
      tab.addEventListener('click', handler);
    }
  }

  getListItemTemplate(data: ListItem[]) {
    return `<div class="list">
              ${data
                .map(
                  (item) => `<div class="list--item">
                <div class="list--title">${item.title}</div>
                <div class="list--preview">${item.preview}</div>
                <div>${item.createAt} - ${item.team}</div>
              </div>`,
                )
                .join('')}
            </div>`;
  }

  getTemplate({ data }: ListViewProps) {
    return `<div data-key="main-list">
              <ul class="menu"> 
                <li data-tab="all">전체</li> 
                <li data-tab="develop">개발</li> 
                <li data-tab="design">디자인</li> 
              </ul> 
              ${this.getListItemTemplate(data)}
            </div>`;
  }
}

export default ListView;
