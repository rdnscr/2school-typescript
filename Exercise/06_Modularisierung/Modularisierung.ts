
interface AppConfig {
    color: string;
    routes: string[];
}

var config: AppConfig = 
{
    color: 'red', 
    routes: ['home', 'list']
};

function boot() : void {
    var router = new Router(config);
    var data = getData();
    bind(data);    
}

function bind(data : any) : void {
    
    // would bind the view to the controller
    console.log(data);
    
}

function getRemoteData() : any {
    
    // gets data from a remote service
    return { data: 'a lot of data' };
}


var localData : any;
function getData() : any {
    
    if(!localData) {
        localData = getRemoteData();
    }
    
    return localData;
}


class Router {
    constructor(private config : AppConfig) {
        
    }
    
    setupRoutes() : void {
        this.config.routes.forEach(element => {
            console.log(element);
        });
    }
    
    routeTo(target : string) : void {
        // TODO: Contains in route confing then route to this element
    }
}


boot();