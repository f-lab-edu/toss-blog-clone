import Controller from './type/Controller';

type ControllerConstructor = new (
  className: string,
  route: Route,
) => Controller;

interface Page {
  page: ControllerConstructor;
  target: string;
}

interface InitRoute {
  path: string;
  page: Page[];
}

export interface Route {
  push: (path: string) => void;
  query: object;
}

const pathToRegex = (path: string) => {
  return new RegExp(
    `^${path.replace(/\/:([a-zA-Z0-9_]+)/g, '/([a-zA-Z0-9_]+)')}$`,
  );
};

export const createRouter = (init: InitRoute[]) => {
  let query: Record<string, string> = {};
  document.addEventListener('popstate', routeCheck);
  routeCheck();

  function push(path: string) {
    window.history.pushState({}, '', path);
    routeCheck();
  }

  function routeCheck() {
    let match: RegExpMatchArray | null = null;
    const pathname = window.location.pathname;

    const route = init.find((route) => {
      const routeRegex = pathToRegex(route.path);
      match = pathname.match(routeRegex);

      return match;
    });

    if (!route) {
      // TODO: 404 Error
      return new Error('Not Found Page');
    }

    const paramNames = [...route.path.matchAll(/:(\w+)/g)].map(
      (match) => match[1],
    );
    query = {};

    paramNames.forEach((name, index) => {
      if (match) {
        query[name] = match[index + 1];
      }
    });

    route.page.forEach(({ page: Page, target }) => {
      const page = new Page(target, { push, query });
      page.init();
    });
  }
};
