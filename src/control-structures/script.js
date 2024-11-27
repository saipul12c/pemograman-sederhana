// Data soal diambil dari data.json
fetch('data.json')
    .then(response => response.json())
    .then(tasks => {
        renderTasks(tasks);
    })
    .catch(error => console.error("Gagal memuat data:", error));

// Fungsi untuk toggle terminal
function toggleTerminal(id) {
    const terminal = document.getElementById(id);
    terminal.classList.toggle("hidden");
}

// Fungsi untuk membuat tugas secara dinamis
function renderTasks(tasks) {
    const container = document.getElementById("tasksContainer");
    tasks.forEach(task => {
        container.innerHTML += `
        <div id="soal${task.id}" class="bg-white p-6 rounded shadow-md">
            <h3 class="text-xl font-bold mb-2">${task.title}</h3>
            <p class="mb-4">${task.description}</p>
            <button onclick="toggleTerminal('terminal${task.id}')" class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Jawab</button>
            <div id="terminal${task.id}" class="hidden bg-gray-900 text-white p-4 rounded mt-4">
                <pre>// Masukkan jawaban Anda di sini</pre>
                <textarea id="answer${task.id}" class="w-full bg-gray-800 text-white border border-gray-600 px-3 py-2 rounded mt-2" rows="5"></textarea>
                <button onclick="validateAnswer('answer${task.id}', ${task.id})" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4">Submit</button>
            </div>
        </div>`;
    });
}

// Fungsi untuk memvalidasi jawaban
function validateAnswer(id, taskId) {
    const correctAnswers = {
        "1": "if (nilai > 10) { console.log('Nilai tinggi'); } else { console.log('Nilai rendah'); }",
        "2": "for (let i = 1; i <= 10; i++) { console.log(i); }",
        "3": `
switch (nomorHari) {
    case 1: console.log('Senin'); break;
    case 2: console.log('Selasa'); break;
    case 3: console.log('Rabu'); break;
    case 4: console.log('Kamis'); break;
    case 5: console.log('Jumat'); break;
    case 6: console.log('Sabtu'); break;
    case 7: console.log('Minggu'); break;
    default: console.log('Hari tidak valid');
}`,
        "4": "angka % 2 === 0 ? 'Genap' : 'Ganjil';",
        "5": `
try {
    if (b === 0) throw new Error('Tidak bisa dibagi dengan nol');
    console.log(a / b);
} catch (err) {
    console.error(err.message);
}`
    };
    const userAnswer = document.getElementById(id).value.trim();
    const correctAnswer = correctAnswers[taskId];
    if (userAnswer === correctAnswer.trim()) {
        alert("Jawaban Anda benar!");
    } else {
        alert("Jawaban Anda salah. Coba lagi!");
    }
}
