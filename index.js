// Your code here
class Cat {
        constructor(name, sex) {
                this.name = name;
                this.sex = sex;
        }

        speak() {
                return `${this.name} says meow!`;
        }
}

class Dog {
        constructor(name, sex) {
                this.name = name;
                this.sex = sex;
        }

        speak() {
                return `${this.name} says woof!`;
        }
}

class Bird {
        constructor(name, sex) {
                this.name = name;
                this.sex = sex;
        }

        speak() {
                if (this.sex === 'male') {
                        return `It's me! ${this.name}, the parrot!`;
                }

                return `${this.name} says squawk!`;
        }
}

const cat = new Cat('Crazy', 'female');
//cat.speak();

const dog = new Dog('Alfa', 'male');
//dog.speak();

const bird = new Bird('Tweety', 'female');
bird.speak();
