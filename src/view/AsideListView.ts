import View from '../type/View';

type ListType = "trend" | "comment" | "tag"

export interface TrendItem {
  title: string;
  author: string;
}

export interface CommentItem {
  title: string;
  comment: string;
  post: string;
}

type ListData = TrendItem[] | CommentItem[] | string[];

interface AsideListViewProps {
  title: string;
  type: ListType;
  data: ListData;
}

class AsideListView extends View<AsideListViewProps> {
  getTrendTemplate(data: TrendItem[]) {
    return `<div class="aside-list">
              ${data.map((item) => `
                <div class="aside-list--item">
                  <div>${item.title}</div>
                  <div>${item.author}</div>
                </div>
              `).join('')}
            </div>`
  }

  getCommentTemplate(data: CommentItem[]) {
    return `<div class="aside-list">
              ${data.map((item) => `
                <div class="aside-list--item">
                  <div>${item.title}</div>
                  <div>${item.comment}</div>
                  <div>${item.post}</div>
                </div>
              `).join('')}
            </div>`
  }

  getTagTemplate(data: string[]) {
    return `<div class="aside-tag">
              ${data.map((item) => `
                <div class="aside-tag--item">
                  ${item}
                </div>
              `).join('')}
            </div>`
  }

  getItemTemplate(type: ListType, data: ListData) {
    switch (type) {
      case 'trend':
        return this.getTrendTemplate(data as TrendItem[]);
      case 'comment':
        return this.getCommentTemplate(data as CommentItem[]);
      case 'tag':
        return this.getTagTemplate(data as string[]);
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
