/**
 * Class approach
 */
class Animal {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(`This is ${this.name}`);
  }
}

/**
 * Prototipal approach
 */
function AnotherAnimal(name) {
  this.name = name;
}

AnotherAnimal.prototype.hello = function hello() {
  console.log(`This is ${this.name}`);
};

const lion = new AnotherAnimal('Lion');
const tiger = new Animal('Tiger');

lion.hello();
tiger.hello();
