function showSwitchExample() {
    let day = 3;
    let dayName;

    switch (day) {
        case 1:
            dayName = 'Senin';
            break;
        case 2:
            dayName = 'Selasa';
            break;
        case 3:
            dayName = 'Rabu';
            break;
        case 4:
            dayName = 'Kamis';
            break;
        case 5:
            dayName = 'Jumat';
            break;
        case 6:
            dayName = 'Sabtu';
            break;
        case 7:
            dayName = 'Minggu';
            break;
        default:
            dayName = 'Hari tidak valid';
    }

    // Menampilkan hasil dalam elemen pre
    document.getElementById('code-example').textContent = `Hari ke-${day} adalah ${dayName}`;
}
