// tslint:disable no-console

interface IAppConfig {
    color: string;
    routes: string[];
}

let config: IAppConfig = {
        color: "red",
        routes: ["home", "list"],
    };

function configure(configuration: IAppConfig): boolean {
    console.log(`farbe: ${configuration.color}`);

    for (const route of configuration.routes) {
        console.log(route);
    }

    return true;
}

const ret: boolean = configure(config);

if (ret) {
    console.log("successfull configured.");
}

// -----------------
// Lösung OO

class Configurator {

    constructor(private readonly pConfig: IAppConfig) {

    }

    public configure(): boolean {
        console.log(`farbe: ${this.pConfig.color}`);

        for (const route of this.pConfig.routes) {
            console.log(route);
        }

        return true;
    }
}

const configurator: Configurator = new Configurator(config);

const ret2: boolean = configurator.configure();

if (ret2) {
    console.log("successfull configured.");
}
// tslint:enable no-console
