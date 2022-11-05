export class Animal {
  public name: string; // default access level.
  private age: number; // private access level.
  protected species: string; // protected access level.
  move: Function = () => {  // default access level.
    console.log("running");
  };
  alive: boolean = true;  // default access level.
  toString(): string {
    return `${this.name} is a ${this.species} and is ${this.age} years old.`;
  };
  constructor(
    name: string,
    age: number,
    species: string,
    alive: boolean,
    move?: Function
  ) {
    this.name = name;
    this.age = age;
    this.species = species;
    this.alive = alive;
    if (move) {
      this.move = move;
    }
  }
}
// `Dog` class inherits from `Animal` class.
export class Dog extends Animal {
  breed: string; // `breed` an extra property to the `Dog` class.
  constructor(
    name: string,
    age: number,
    species: string,
    alive: boolean,
    breed: string,
    move?: Function
  ) {
    // `super` keyword is used to call the constructor parameters of the parent class.
    super(name, age, species, alive, move);
    // `breed` property is set to the value of `breed` parameter.
    this.breed = breed;
  }
}