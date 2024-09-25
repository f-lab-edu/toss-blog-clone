abstract class View<Props = undefined> {
  private target?: Element | null;
  private readonly className: string;

  constructor(target: string) {
    this.className = target;
  }

  abstract getTemplate(props?: Props): string;

  render(props?: Props) {
    this.target = document.querySelector(this.className);

    if (!this.target) {
      throw Error('The target is not available.');
    }

    const container = this.target.cloneNode(true);
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = this.getTemplate(props);

    if (!tempContainer.firstChild) {
      throw Error('The element to render is not available.');
    }

    container.appendChild(tempContainer.firstChild);
    this.target.replaceWith(container);

    // this.eventBinding && this.eventBinding();
  }
}

export default View
