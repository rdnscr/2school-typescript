interface IButton {
   src: string;
   name: string;
   onload: (event) => void;
}

class Button implements IButton {
   public name: string;
   public onload: (event: any) => void; // no typing specified

   // Example of getter and setter function
   private source: string;

   get src(): string { return this.source; }
   set src(value: string) { this.source = value; }
}

class PrincipalsExample {
   public btn1: IButton = new Button();
   public btn2: IButton = new Button();
   public btn3: IButton = new Button();

   constructor() {
      this.btn1.src = 'button1.png';
      this.btn1.name = 'coin1';
      this.btn1.onload = (e) => this.onLoad(e); // lambda expression

      this.btn2.src = 'button2.png';
      this.btn2.name = 'coin2';
      this.btn2.onload = (e) => this.onLoad(e);

      this.btn3.src = 'button3.png';
      this.btn3.name = 'coin3';
      this.btn3.onload = (e) => this.onLoad(e);
   }

   private onLoad(e): void {
      if (e.target.name === 'coin1') {
         this.btn1.src = 'button1Hover.png';
      }

      if (e.target.name === 'coin2') {
         this.btn2.src = 'button2Hover.png';
      }

      if (e.target.name === 'coin3') {
         this.btn3.src = 'button3Hover.png';
      }
   }
}

const example = new PrincipalsExample();
console.log(example.btn1.src + ', ' + example.btn1.name + ', ' + example.btn1.onload);
console.log(example.btn2.src + ', ' + example.btn2.name + ', ' + example.btn2.onload);
console.log(example.btn3.src + ', ' + example.btn3.name + ', ' + example.btn3.onload);
