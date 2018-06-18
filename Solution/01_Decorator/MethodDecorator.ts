// tslint:disable no-console

class MethodDecoratorClass {
    @log
    public foo(n: number) {
        return n * 2;
    }
}

function log(target: any, key: string, descriptor: any) {
    // target === C.prototype
    // key === "foo"
    // value === Object.getOwnPropertyDescriptor(C.prototype, "foo")
    return {
        value: (...args: any[]) => {

            // assign the original function
            const originalFunction = descriptor.value;

            // convert list of foo arguments to string
            const a = args.map((g) => JSON.stringify(g)).join();

            // invoke foo() and get its return value
            const result = originalFunction.apply(this, args);

            // convert result to string
            const r = JSON.stringify(result);

            // display in console the function call details
            console.log(`Call: ${key}(${a}) => ${r}`);

            // return the result of invoking foo
            return result;
        },
    };
}

let decorated = new MethodDecoratorClass();
decorated.foo(12);

// tslint:enable no-console
