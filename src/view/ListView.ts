import View from '../type/View';
import { ListItem } from './AsideListView';

interface ListViewProps {
  data: ListItem[];
}

class ListView extends View<ListViewProps> {
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
    return `<div>
              <ul class="menu"> 
                <li>전체</li> 
                <li>개발</li> 
                <li>디자인</li> 
              </ul> 
              ${this.getListItemTemplate(data)}
            </div>`;
  }
}

export default ListView;
