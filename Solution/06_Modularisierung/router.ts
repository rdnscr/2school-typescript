import {IAppConfig} from './config';

export class Router {
    constructor(private readonly config: IAppConfig) {
    }

    public setupRoutes(): void {
        this.config.routes.forEach((element: string) => {            
            console.log(element);
        });
    }

    public routeTo(target: string): void {
        // TODO: Contains in route confing then route to this element
    }
}
