type IClassToDecorate = new (greeting: string) => ClassToDecorate;

// TODO add decorator
class ClassToDecorate {
   private greeting: string;
   constructor(message: string) {
      this.greeting = message;
   }

   public greet(): string {
      return `Hello, ${this.greeting}`;
   }
}

function hiDecorator(constructorToDecorate: IClassToDecorate): IClassToDecorate {
   // save a reference to the original constructor
   const original = constructorToDecorate;

   // a utility function to generate instances of a class
   function construct(constructor: any, args: any): void {
      const innerDecoratedClass: any = (): void => {
         return constructor.apply(this, args);
      };
      innerDecoratedClass.prototype = constructorToDecorate.prototype;

      return new innerDecoratedClass();
   }

   // the new constructor behaviour
   const replacedConstructor: any = (...args: any[]): void => {
      // TODO return the new constructor behavior
   };

   // copy prototype so intanceof operator still works
   replacedConstructor.prototype = original.prototype;

   // TODO return new constructor (will override original)
   return replacedConstructor;
}

let decoratedClass: ClassToDecorate = new ClassToDecorate('I will be replaced');
// tslint:disable-next-line:no-console
console.log(decoratedClass.greet());
