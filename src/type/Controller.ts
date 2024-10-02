import { Route } from '../router';

abstract class Controller {
  public className: string;
  public route: Route | undefined;

  protected constructor(className: string, route?: Route) {
    this.className = className;
    this.route = route;
  }

  abstract render(): void;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  eventBinding() {}

  init() {
    const container = document.querySelector(this.className);
    if (container) {
      container.innerHTML = '';
      this.render();
      this.eventBinding();
    }
  }
}

export default Controller;
