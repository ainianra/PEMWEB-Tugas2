// Membuat elemen-elemen menggunakan DOM
document.body.innerHTML = `
    <h2>Formulir Pendaftaran Panitia Kegiatan Desa Binaan</h2>

    <!-- Formulir -->
    <form id="pendaftaranForm">
        <label for="name">Nama:</label>
        <input type="text" id="name" required><br><br>

        <label for="nim">NIM:</label>
        <input type="text" id="nim" required><br><br>

        <label for="angkatan">Angkatan:</label>
        <input type="text" id="angkatan" required><br><br>
        
        <label for="departement">Departement:</label>
        <input type="text" id="departement" required><br><br>

        <label for="alasan">Alasan:</label>
        <textarea id="alasan" rows="4" required></textarea><br><br>

        <button type="submit">Kirim</button>
    </form>

    <!-- Tempat untuk menampilkan tabel -->
    <h3>Tampilkan datanya disini:</h3>
    <table id="dataTabel">
        <tr>
            <th>Nama</th>
            <th>NIM</th>
            <th>Angkatan</th>
            <th>Departement</th>
            <th>Alasan</th>
        </tr>
    </table>
`;

// Ambil elemen-elemen dari DOM
const form = document.getElementById('pendaftaranForm');
const dataTabel = document.getElementById('dataTabel');

// Event listener untuk form submit
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman saat form disubmit

    // Ambil nilai input dari form
    const name = document.getElementById('name').value;
    const nim = document.getElementById('nim').value;
    const angkatan = document.getElementById('angkatan').value;
    const departement = document.getElementById('departement').value;
    const alamat = document.getElementById('alamat').value;

    // Buat baris baru untuk tabel
    const newRow = dataTabel.insertRow();

    // Tambahkan sel-sel ke baris baru
    const nameCell = newRow.insertCell(0);
    const nimCell = newRow.insertCell(1);
    const angkatanCell = newRow.insertCell(2);
    const departementCell = newRow.insertCell(3);
    const alamatCell = newRow.insertCell(4);

    // Isi sel-sel dengan data dari form
    nameCell.textContent = name;
    nimCell.textContent = nim;
    angkatanCell.textContent = angkatan;
    departementCell.textContent = departement;
    alamatCell.textContent = alamat;

    // Reset form setelah submit
    form.reset();
});
