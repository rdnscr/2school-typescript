// tslint:disable

function configure(configuration) {
    console.log('farbe: ' + configuration.color);
    
    var i;
    for (i = 0; index < configuration.routes.length; ++i) {
        console.log('route: ' + configuration.routes[i]);
    }
    return true;
}

var config = 
{
    color: 'red', 
    routes: ['home', 'list']
};


var ret = configure(config);

if(ret) {
    console.log('successfull configured.');
}

// tslint:enable