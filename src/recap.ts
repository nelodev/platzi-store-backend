const myName = 'Nelo';
const myAge = 12;
const sum = (a: number, b: number) => {
  return a + b;
};

sum(1, 2);

class Person {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `${this.name} has ${this.age} years old`;
  }
}

const nelo = new Person(25, 'Nelo');
nelo.getSummary();
