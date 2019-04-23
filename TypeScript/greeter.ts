// typeScript sample file

class Student {
  fullName: string;
  constructor(public firstName: string, public middleName: string, public lastName: string) {
    this.fullName = firstName + " " + middleName + " " + lastName;
    }
  }

interface Person {
  firstName: string;
  middleName: string;
  lastName: string;
  }

function greeter(person: Person) {
    return "Hello, " + person.firstName + person.middleName + person.lastName;
}

let user = new Student('Matthew', '', 'Del Monte');

document.body.innerHTML = greeter(user);

console.log(user);
