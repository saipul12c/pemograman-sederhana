function showInheritanceExample() {
    // Contoh pewarisan dalam JavaScript
    class Animal {
        constructor(name) {
            this.name = name;
        }

        speak() {
            return `${this.name} makes a noise.`;
        }
    }

    class Dog extends Animal {
        speak() {
            return `${this.name} barks.`;
        }
    }

    let dog = new Dog('Rover');

    document.getElementById('code-example').textContent = 
        dog.speak();
}
