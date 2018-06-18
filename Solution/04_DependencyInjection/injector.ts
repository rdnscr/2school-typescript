import { Injectable } from "./inject";

export class Injector {

    /**
     * Maps values by their injectionKey.
     *
     * {{ string: * }}
     */
    private readonly valuesByInjectionKey: { [injectionKey: string]: any } = {};

    /**
     * Associate an injectionKey with a value so that when Injector#instantiate is
     * invoked the supplied value will be injected into properties of the target Class
     * decorated with the `@inject` decorator.
     *
     * param {string} injectionKey
     * param {*} value
     */
    public mapValue(injectionKey: string, value: any): void {
        this.valuesByInjectionKey[injectionKey] = value;
    }

    /**
     * Create a new instance of the supplied Class fulfilling any property injections
     * which are present in the injectionRules map.
     *
     * param {function} Class
     * returns {T}
     */
    public instantiate<T>(Class: { new(...args: any[]): T }): T {
        // Start by creating a new instance of the target Class.
        const instance: any = new Class();

        // Loop through all properties decorated with `@inject()` in this Class and
        // try to satisfy them if there is a mapped value.
        for (const injectionPoint of this.getInjectionPoints(Class as Injectable)) {
            const injectionValue: any = this.valuesByInjectionKey[injectionPoint.injectionKey];

            // Perform the injection if we have a value assigned to this injectionKey.
            if (injectionValue) {
                instance[injectionPoint.propertyName] = injectionValue;
            }
        }

        return instance;
    }

    private getInjectionPoints<T>(Class: Injectable): InjectionPoint[] {
        let result: InjectionPoint[] = [];

        // Retrieve the `__inject__` hash created by the @inject decorator from the
        // target Class.
        if (Class.hasOwnProperty("__inject__")) {
            result = Object.keys(Class.__inject__)
                .map((propertyName: string) => {
                    return {
                        injectionKey: Class.__inject__[propertyName],
                        propertyName,
                    };
                });
        }

        return result;
    }
}

interface InjectionPoint {
    propertyName: string;
    injectionKey: string;
}
