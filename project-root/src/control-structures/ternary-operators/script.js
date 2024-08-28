function showTernaryExample() {
    let age = 20;
    let canVote = (age >= 18) ? 'Ya' : 'Tidak';

    document.getElementById('code-example').textContent = 
        `Usia: ${age}, Dapat memilih: ${canVote}`;
}
