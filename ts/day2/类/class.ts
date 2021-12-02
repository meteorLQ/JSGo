// 类
interface IPerson{
    firstName:string
    lastName:string
}

class Person{
    firstName:string
    lastName:string
    fullName:string
    constructor(firstName:string,lastName:string) {
        this.firstName=firstName
        this.lastName=lastName
        this.fullName=this.firstName+'_'+this.lastName
    }
}

function showFullName(person:IPerson) {
    return person.firstName+'_'+person.lastName
}

const person=new Person('大','黄峰')
console.log(showFullName(person))

