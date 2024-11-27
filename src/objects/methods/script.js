function showMethodExample() {
    // Contoh objek dengan metode dalam JavaScript
    let car = {
        brand: 'Toyota',
        model: 'Corolla',
        year: 2021,
        getDetails: function() {
            return `Mobil: ${this.brand} ${this.model}, Tahun: ${this.year}`;
        }
    };

    // Menampilkan contoh dalam elemen pre
    document.getElementById('code-example').textContent = car.getDetails();
}
