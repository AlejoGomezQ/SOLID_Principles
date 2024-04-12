//Los subtipos deben poder ser sustituidos por sus tipos base

class LivingBeing {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public eat(): void {
        console.log("I am eating");
    }
}

class Human extends LivingBeing {
    private job: string;

    constructor(name: string, age: number, job: string) {
        super(name, age);
        this.job = job;
    }

    public getJob(): string {
        return this.job;
    }

   public work(): void {
        console.log("I am working");
    }
}

class Plant extends LivingBeing {
    private type: string;

    constructor(name: string, age: number, type: string) {
        super(name, age);
        this.type = type;
    }

    public getType(): string {
        return this.type;
    }

    //Las plantas no pueden comer
    public eat(): void {
        throw new Error("Plants can't eat");
    }
}

const livingBeings: LivingBeing[] = [
    new LivingBeing("LivingBeing", 2),
    new Human("Alejo Gomez", 26, "Software engineer"),
    new Plant("Plant", 1, "Tree")
] 

livingBeings.forEach(livingBeing => {
    livingBeing.eat();
});