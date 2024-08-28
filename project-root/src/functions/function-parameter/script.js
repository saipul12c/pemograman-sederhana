function showParameterExample() {
    // Contoh fungsi dengan parameter dalam JavaScript
    function calculateSum(a, b) {
        return a + b;
    }

    // Menampilkan contoh dalam elemen pre
    document.getElementById('code-example').textContent = `3 + 4 = ${calculateSum(3, 4)}`;
}
