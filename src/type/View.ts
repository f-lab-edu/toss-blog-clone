abstract class View {
  private readonly target: Element | null;

  constructor(target: Element | null) {
    this.target = target
  }

  abstract getTemplate(): string;

  render() {
    if (!this.target) {
      throw Error('The target is not available.');
    }

    const container = this.target.cloneNode(true);

    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = this.getTemplate();

    if (!tempContainer.firstChild) {
      throw Error('The element to render is not available.');
    }

    container.appendChild(tempContainer.firstChild);
    this.target.replaceWith(container);

    // this.eventBinding && this.eventBinding();
  }
}

export default View
