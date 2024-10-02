import Controller from './type/Controller';

interface InitRoute {
  path: string;
  page: Controller[];
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

    route.page.forEach((page) => page.init());
  }

  function push() {
    console.log('page push');
  }

  function replace() {
    console.log('page replace');
  }

  return { push, replace, query };
};
