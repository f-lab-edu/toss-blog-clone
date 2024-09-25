import View from '../type/View';

interface LinkViewProps {
  content: string
  href?: string
}

class LinkView extends View<LinkViewProps> {
  getTemplate({ content, href = "#" }: LinkViewProps): string {
    return `<a class="link" href="${href ? href : "#"}">${content ? content : ''}</a>`;
  }
}

export default LinkView
