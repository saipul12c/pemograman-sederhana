function showIfExample() {
    // Contoh if statement dalam JavaScript
    let age = 18;

    if (age >= 18) {
        console.log("Anda sudah dewasa.");
    } else {
        console.log("Anda masih di bawah umur.");
    }

    // Menampilkan contoh dalam elemen pre
    document.getElementById('code-example').textContent = `
let age = 18;

if (age >= 18) {
    console.log("Anda sudah dewasa.");
} else {
    console.log("Anda masih di bawah umur.");
}
    `;
}
