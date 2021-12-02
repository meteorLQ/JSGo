interface IPerson {
    id:number;
    name:string;
    age:number;
    gender:string;
}

function showInfo(person:IPerson) {
    console.log(person.age)
    console.log(person.name)
    console.log(person.age)
    console.log(person.gender)
}
const zhansan={
    id:1,
    name:'张三',
    age:18,
    gender:'boy'
}
showInfo(zhansan)