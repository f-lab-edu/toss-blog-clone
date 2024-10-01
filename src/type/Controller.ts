abstract class Controller {
  abstract render(): void;

  init() {
    this.render();
    // this.eventBinding && this.eventBinding();
  }
}

export default Controller;
