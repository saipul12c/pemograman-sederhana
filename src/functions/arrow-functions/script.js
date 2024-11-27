function showArrowFunctionExample() {
    // Fungsi panah untuk menjumlahkan dua angka
    let add = (a, b) => a + b;

    document.getElementById('code-example').textContent = 
        `Hasil dari 5 + 3 adalah ${add(5, 3)}`;
}
