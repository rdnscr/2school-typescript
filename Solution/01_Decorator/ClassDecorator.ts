// tslint:disable no-console

type IClassToDecorate = new (greeting: string) => ClassToDecorate;

@hiDecorator
class ClassToDecorate {
    private greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    public greet() {
        return 'Hello, ' + this.greeting;
    }
}

function hiDecorator(constructorToDecorate: IClassToDecorate): IClassToDecorate {
    // save a reference to the original constructor
    const original = constructorToDecorate;

    // a utility function to generate instances of a class
    function construct(constructor, args) {
        const decoratedClass: any = function() {
            return constructor.apply(this, args);
        };
        decoratedClass.prototype = constructorToDecorate.prototype;
        return new decoratedClass();
    }

    // the new constructor behaviour
    const replacedConstructor: any = (...args) => {
        return construct(original, ['hi']);
    };

    // copy prototype so intanceof operator still works
    replacedConstructor.prototype = original.prototype;

    // return new constructor (will override original)
    return replacedConstructor;
}

let decoratedAny = new ClassToDecorate('I will be replaced');
console.log(decoratedAny.greet());

// tslint:enable no-console
