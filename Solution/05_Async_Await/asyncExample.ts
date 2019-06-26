// tslint:disable no-console

const readFromBackendOne: Promise<string> = new Promise((resolve) => {
   resolve('one');
});

let readFromBackendAfterOne: Promise<string> = new Promise((resolve) => {
   resolve('afterOne');
});

let readFromBackendAfterAfterOne: Promise<string> = new Promise((resolve) => {
   resolve('afterAfterOne');
});

readFromBackendOne.then((result: any) => {
   console.log(result);
   readFromBackendAfterOne.then((r1: any) => {
      console.log(r1);
      readFromBackendAfterAfterOne.then((r2: any) => {
         console.log(r2);
      });
   });
});

async function asyncExample(): Promise<void> {
   console.log(await readFromBackendOne);
   console.log(await readFromBackendAfterOne);
   console.log(await readFromBackendAfterAfterOne);
}

asyncExample();

// tslint:enable no-console
