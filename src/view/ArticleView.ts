import View from '../type/View';
import { ListItem } from './AsideListView';

interface ArticleViewProps {
  data: ListItem;
}

class ArticleView extends View<ArticleViewProps> {
  getTemplate({ data }: ArticleViewProps) {
    return `<div class="article">
              <section class="contents--title"></section>
              <section class="article--container">
                <p class="article--title">${data.title}</p>
                
                <div class="article--tags">
                  ${data.tag.map((item) => `<div class="article--tag">#${item}</div>`).join('')}  
                </div>
                
                <div class="article--info">
                  <div>${data.team}</div>
                  <div>${data.createAt}</div>
                </div>
                
                <div>${data.preview}</div>
              </section>
            </div>`;
  }
}

export default ArticleView;
