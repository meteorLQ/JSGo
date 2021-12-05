class Teacher {
    private _name:string;
    private _age:number
    constructor() {
    }
    get name(){
        return this._name
    }
    set name(name){
        this._name=name
    }
}

class A {
    constructor(private name:string,private age:number) {
    }
}

new A("a",2)