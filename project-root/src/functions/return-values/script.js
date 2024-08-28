function showReturnValueExample() {
    // Contoh fungsi dengan nilai balik dalam JavaScript
    function square(num) {
        return num * num;
    }

    // Menampilkan contoh dalam elemen pre
    document.getElementById('code-example').textContent = `Hasil dari 5 * 5 = ${square(5)}`;
}
