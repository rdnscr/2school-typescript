var config = {
    color: 'red',
    routes: ['home', 'list'],
};
function boot() {
    var router = new Router(config);
    var data = getData();
    bind(data);
}
function bind(data) {
    console.log(data);
}
function getRemoteData() {
    return { data: 'a lot of data' };
}
var localData;
function getData() {
    if (!localData) {
        localData = getRemoteData();
    }
    return localData;
}
var Router = (function () {
    function Router(currentConfig) {
        this.currentConfig = currentConfig;
    }
    Router.prototype.setupRoutes = function () {
        this.currentConfig.routes.forEach(function (element) {
            console.log(element);
        });
    };
    Router.prototype.routeTo = function (target) {
    };
    return Router;
}());
boot();
