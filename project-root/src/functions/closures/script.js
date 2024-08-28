function showClosureExample() {
    function createCounter() {
        let count = 0;
        return function() {
            count += 1;
            return count;
        };
    }

    let counter = createCounter();
    document.getElementById('code-example').textContent = 
        `Counter: ${counter()} (first call), ${counter()} (second call)`;
}
