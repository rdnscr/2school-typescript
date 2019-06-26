import {Binder} from './binder';
import {theAppConfig} from './config';
import {Router} from './router';

import {DataService} from './dataService';
import {RemoteService} from './remoteService';

function boot(): void {
    const router: Router = new Router(theAppConfig);
    const remoteService: RemoteService = new RemoteService();
    const dataService: DataService = new DataService(remoteService);
    const data: any = dataService.getData();
    const binder: Binder = new Binder();
    binder.bind(data);
}

boot();
