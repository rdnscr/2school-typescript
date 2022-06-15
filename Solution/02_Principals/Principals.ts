interface IButton {
   src: string;
   name: string;
   onload: (event: any) => void;
}

class Button implements IButton {
   // Example of getter and setter function
   public name: string;
   public onload: (event: any) => void; // no typing specified

   private source: string;

   get src(): string { return this.source; }
   set src(value: string) { this.source = value; }
}

class PrincipalsExample {
   public buttons: IButton[] = [new Button(), new Button(), new Button()];

   constructor() {
      for (const btn of this.buttons) {
         const index: number = this.buttons.indexOf(btn) + 1; // index is zero based
         btn.src = `button${index}.png`;
         btn.name = `coin${index}`;
         btn.onload = (e: any): any => this.onLoad(e);
      }
   }

   private onLoad(e: any): void {
      for (const btn of this.buttons) {
         if (btn.name === e.target.name) {
            btn.src = `${name}Hover.png`;
         }
      }
   }
}

const example: PrincipalsExample = new PrincipalsExample();

for (const btn of example.buttons) {   
   console.log(`${btn.src}, ${btn.name}, ${btn.onload}`);
}
