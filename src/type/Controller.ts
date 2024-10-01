abstract class Controller {
  abstract render(): void;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  eventBinding() {}

  init() {
    this.render();
    this.eventBinding();
  }
}

export default Controller;
