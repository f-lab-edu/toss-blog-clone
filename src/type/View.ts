abstract class View<Props = undefined> {
  private target?: Element | null;
  private readonly className: string;

  constructor(target: string) {
    this.className = target;
  }

  abstract getTemplate(props?: Props): string;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  eventBinding() {}

  render(props?: Props) {
    this.target = document.querySelector(this.className);

    if (!this.target) {
      throw Error('The target is not available.');
    }

    const container = this.target.cloneNode(true) as HTMLElement;
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = this.getTemplate(props);

    const newElement = tempContainer.firstChild as HTMLElement;

    if (!newElement) {
      throw Error('The element to render is not available.');
    }

    container.appendChild(newElement);
    this.target.replaceWith(container);
    this.eventBinding();
  }
}

export default View;
