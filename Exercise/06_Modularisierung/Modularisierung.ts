// tslint:disable-next-line:interface-name
interface AppConfig {
  color: string;
  routes: string[];
}

let config: AppConfig = {
  color: 'red',
  routes: ['home', 'list'],
};

function boot(): void {
  const router = new Router(config);
  const data = getData();
  bind(data);
}

function bind(data: any): void {
  // would bind the view to the controller
  // tslint:disable-next-line:no-console
  console.log(data);
}

function getRemoteData(): any {
  // gets data from a remote service
  return { data: 'a lot of data' };
}

let localData: any;
function getData(): any {
  if (!localData) {
    localData = getRemoteData();
  }

  return localData;
}

class Router {
  constructor(private currentConfig: AppConfig) {}

  public setupRoutes(): void {
    this.currentConfig.routes.forEach((element) => {
      // tslint:disable-next-line:no-console
      console.log(element);
    });
  }

  public routeTo(target: string): void {
    // TODO: Contains in route confing then route to this element
  }
}

boot();
