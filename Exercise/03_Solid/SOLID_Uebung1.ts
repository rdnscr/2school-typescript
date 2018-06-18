class Person {
    public name: string;
    public surname: string;
    public email: string;

    constructor(name: string, surname: string, email: string) {
        this.surname = surname;
        this.name = name;
        if (this.validateEmail(email)) {
            this.email = email;
        } else {
            throw new Error("Invalid email!");
        }
    }

    public greet(): void {
        alert(`Hi! I'm ${this.name}. You can reach me at ${this.email}`);
    }

    private validateEmail(email: string): boolean {
        const re: RegExp = /\S+@\S+\.\S+/;

        return re.test(this.email);
    }
}
