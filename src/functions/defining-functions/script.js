function showFunctionExample() {
    // Contoh fungsi dalam JavaScript
    function greet(name) {
        return `Hello, ${name}!`;
    }

    // Menampilkan contoh dalam elemen pre
    document.getElementById('code-example').textContent = greet('Dunia');
}
