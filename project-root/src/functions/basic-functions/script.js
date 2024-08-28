function showObjectExample() {
    // Contoh objek dalam JavaScript
    let car = {
        brand: 'Toyota',
        model: 'Corolla',
        year: 2021,
    };

    // Menampilkan contoh dalam elemen pre
    document.getElementById('code-example').textContent = 
        `Mobil: ${car.brand} ${car.model}, Tahun: ${car.year}`;
}
