import { Route } from '../router';

abstract class Controller {
  public className: string;
  public route: object | undefined;

  protected constructor(className: string, route?: Route) {
    this.className = className;
    this.route = route;
  }

  abstract render(): void;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  eventBinding() {}

  init() {
    this.render();
    this.eventBinding();
  }
}

export default Controller;
