function showEncapsulationExample() {
    class Person {
        #name;

        constructor(name) {
            this.#name = name;
        }

        getName() {
            return this.#name;
        }

        setName(name) {
            this.#name = name;
        }
    }

    let person = new Person('Alice');
    person.setName('Bob');

    document.getElementById('code-example').textContent = 
        `Nama: ${person.getName()}`;
}
