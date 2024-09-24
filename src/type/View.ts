abstract class View<Props = undefined> {
  private readonly target: Element | null;

  constructor(target: Element | null) {
    this.target = target
  }

  abstract getTemplate(props?: Props): string;

  render(props?:Props) {
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
