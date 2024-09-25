import View from '../type/View';

type ListType = "trend" | "comment" | "tag"

export interface TrendItem {
  title: string;
  author: string;
}

type ListData = TrendItem[] | object[];

interface AsideListViewProps {
  title: string;
  type: ListType;
  data: ListData;
}

class AsideListView extends View<AsideListViewProps> {
  getTrendTemplate(data: TrendItem[]) {
    return `<div>
              ${data.map((item) => `
                <div>
                  <div>${item.title}</div>
                  <div>${item.author}</div>
                <div>
              `)}
            </div>`
  }

  getItemTemplate(type: ListType, data: ListData) {
    switch (type) {
      case 'trend':
        return this.getTrendTemplate(data as TrendItem[]);
      case 'comment':
        return `<div>comment</div>`
      case 'tag':
        return `<div>tag</div>`
      default:
        return `<div>렌더링에 실패했습니다.</div>`;
    }
  }

  getTemplate({ title, type, data }:AsideListViewProps) {
    const ItemTemplate = this.getItemTemplate(type, data)

    return `<article>
              <span class="title">${title}</span>
              ${ItemTemplate}
            </article>`;
  }
}

export default AsideListView;
