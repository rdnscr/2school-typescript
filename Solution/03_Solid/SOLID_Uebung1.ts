// tslint:disable max-classes-per-file

class Email {
    public email: string;

    constructor(email: string) {
        if (this.validateEmail(email)) {
            this.email = email;
        } else {
            throw new Error('Invalid email!');
        }
    }

    public validateEmail(email: string): boolean {
        const re = /\S+@\S+\.\S+/;

        return re.test(email);
    }
}

class Person {
    public name: string;
    public surname: string;
    public email: Email;

    constructor(name: string, surname: string, email: Email) {
        this.email = email;
        this.name = name;
        this.surname = surname;
    }

    public greet(): void {
        alert('Hi!');
    }
}

// tslint:enable max-classes-per-file
