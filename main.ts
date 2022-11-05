import { Animal, Dog } from "./Animal";
import { MyTask, Task } from "./Task";
const dogMove = () => {
  console.log("gallopping");
};
const pet = new Animal("Fido", 3, "dog", true, dogMove);
// log pet property
console.log(pet.name);
console.log(pet.alive);
console.log(pet.move);
pet.move();

const dog = new Dog("Fido", 3, "dog", true, "Labrador", dogMove);
console.log(dog);


let myTask: Task = new MyTask('someTask');
myTask.run("test");

console.log(`${pet}`)