function showPolymorphismExample() {
    class Animal {
        speak() {
            console.log("Animal speaks");
        }
    }

    class Dog extends Animal {
        speak() {
            console.log("Dog barks");
        }
    }

    class Cat extends Animal {
        speak() {
            console.log("Cat meows");
        }
    }

    let animals = [new Dog(), new Cat()];
    animals.forEach(animal => animal.speak());
}
