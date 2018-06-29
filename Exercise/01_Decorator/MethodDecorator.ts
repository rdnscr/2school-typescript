class MethodDecoratorClass {
    // TODO use method decorator
    public foo(n: number): number {
        return n * 2;
    }
}

function log(target: any, key: string, descriptor: PropertyDescriptor) {
    // target === C.prototype
    // key === "foo"
    // value === Object.getOwnPropertyDescriptor(C.prototype, "foo")
    return {
        value: (...args: any[]): any => {

            // assign the original function
            const originalFunction = descriptor.value;

            // convert list of foo arguments to string
            const a: string = args.map((v: any) => JSON.stringify(v))
            .join();

            // TODO invoke foo() and get its return value
            const r = "";

            // TODO convert result to string
            const result = "";

            // display in console the function call details
            // tslint:disable-next-line:no-console
            console.log(`Call: ${key}(${a}) => ${r}`);

            // return the result of invoking foo
            return result;
        },
    };
}

let decorated = new MethodDecoratorClass();
decorated.foo(12);
