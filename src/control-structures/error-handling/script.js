function showErrorHandlingExample() {
    try {
        let result = riskyFunction();
        document.getElementById('code-example').textContent = `Hasil: ${result}`;
    } catch (error) {
        document.getElementById('code-example').textContent = `Terjadi kesalahan: ${error.message}`;
    }
}

function riskyFunction() {
    throw new Error("Ini adalah contoh kesalahan!");
}
