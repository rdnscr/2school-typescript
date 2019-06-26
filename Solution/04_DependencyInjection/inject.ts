// tslint:disable-next-line:interface-name
export interface Injectable {
    __inject__?: { [name: string]: string };
}

/**
 * Decorates a Class with a PropertyInjection point.
 *
 * <pre>
 *     class MyActor {
 *       @inject('firstName')
 *       name : String;
 *     }
 * </pre>
 *
 * @decorator
 * param {string} injectionKey
 * returns {function(Object, string): void}
 */
export function inject(injectionKey: string): any {

    // Our decorator provides a factory function which will be invoked with an
    // instance of the decorated Class and the name of the decorated property.
    return function recordInjection(target: Injectable, decoratedPropertyName: string): void {

        // Get a reference to the Class of the target object which has been
        // decorated.
        const targetType: Injectable = target.constructor as Injectable;

        if (!targetType.hasOwnProperty('__inject__')) {
            targetType.__inject__ = {};
        }

        // Associate this property with the injectionKey provided in the
        // decorator call
        targetType.__inject__[decoratedPropertyName] = injectionKey;
    };
}
