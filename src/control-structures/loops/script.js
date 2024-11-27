function showLoopExample() {
    // Contoh loop dalam JavaScript
    let result = '';
    for (let i = 1; i <= 5; i++) {
        result += `Iterasi ke-${i}\n`;
    }

    // Menampilkan contoh dalam elemen pre
    document.getElementById('code-example').textContent = result;
}
