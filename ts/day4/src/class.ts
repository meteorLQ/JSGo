 class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    sayHello(){
        console.log("你好～")
    }
}

class Dog extends Animal{

}
export const dog1 = new Dog('菜菜', 6);