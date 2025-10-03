// Data Mahasiswa
const mahasiswa = {
  nama: "Christopher Yehuda Panjaitan",
  nim: "241401118",
  kom: "A",
  hobi: "Coding & Gaming",
  motto: "Belajar adalah investasi seumur hidup",
  universitas: "Universitas Sumatera Utara",
  jurusan: "Ilmu Komputer",
  sifat: "penuh semangat dan suka tantangan",
  foto: "foto.jpg"
};

const jadwal = [
  { hari: "Senin", mataKuliah: "Praktikum Basis Data ", sks: 2, waktu: "08:30 - 10:00", dosen: "Muhammad Syukron Jazila" },
  { hari: "Senin", mataKuliah: "Komputerisasi Ekonomi dan Bisnis", sks: 2, waktu: "10:30 - 12:10", dosen: "Taufik Akbar Parluhutan SE, M.Si" },
  { hari: "Selasa", mataKuliah: "IELTS Preparation", sks: 2, waktu: "08:30 - 10:00", dosen: "Drs. Yulianus Harefa GradDipEd TESOL., MEd TESOL" },
  { hari: "Selasa", mataKuliah: "Praktikum Struktur Data", sks: 2, waktu: "10:30 - 12:10", dosen: "Alya Debora panggabean" },
  { hari: "Selasa", mataKuliah: "Kecerdasan Buatan", sks: 3, waktu: "13:50 - 16:20", dosen: "Dr. Amalia S.T., M.T" },
  { hari: "Rabu", mataKuliah: "Pemrograman Web", sks: 3, waktu: "10:30 - 13:00", dosen: "Dewi Sartika Br Ginting S.Kom., M.Kom" },
  { hari: "Rabu", mataKuliah: "Basis Data", sks: 3, waktu: "14:40 - 17:10", dosen: "Insidini Fawwaz M.Kom" },
  { hari: "Jumat", mataKuliah: "Wirausaha Digital", sks: 2, waktu: "08:30 - 10:10", dosen: "Dr. T. Henny Febriana Harumy S.Kom., M.Kom" },
  { hari: "Jumat", mataKuliah: "Praktikum Pemrograman Web", sks: 2, waktu: "10:30 - 12:10", dosen: "Muhammad Dzakwan" },
  { hari: "Jumat", mataKuliah: "Struktur Data", sks: 3, waktu: "13:50 - 16:20", dosen: "Anandhini Medianty Nababan S.Kom., M.T" }
];

const kontak = {
  instagram: "https://instagram.com/christopher.yehuda",
  gmail: "mailto:christopheryehudapanjaitan@gmail.com",
  whatsapp: "https://wa.me/6287762741822"
};

const app = document.getElementById("app");

const profileDiv = document.createElement("div");
profileDiv.className = "profile";
profileDiv.innerHTML = `
  <img src="${mahasiswa.foto}" alt="Foto Mahasiswa">
  <div class="profile-info">
    <p><strong>Nama Lengkap:</strong> ${mahasiswa.nama}</p>
    <p><strong>NIM:</strong> ${mahasiswa.nim}</p>
    <p><strong>KOM:</strong> ${mahasiswa.kom}</p>
    <p><strong>Hobi:</strong> ${mahasiswa.hobi}</p>
    <p><strong>Motto Hidup:</strong> "${mahasiswa.motto}"</p>
  </div>
`;
app.appendChild(profileDiv);

const tentang = document.createElement("div");
tentang.innerHTML = `
  <h2>Tentang Saya</h2>
  <p>
    Halo, nama saya ${mahasiswa.nama}. Saya mahasiswa di ${mahasiswa.universitas}. 
    Saya suka belajar hal baru, terutama di bidang ${mahasiswa.bidang}. 
    Saya orang yang ${mahasiswa.sifat}.
  </p>
`;
app.appendChild(tentang);

const jadwalDiv = document.createElement("div");
let jadwalHTML = `
  <h2>Jadwal Kuliah</h2>
  <table>
    <tr>
      <th>Hari</th>
      <th>Mata Kuliah</th>
      <th>SKS</th>
      <th>Waktu</th>
      <th>Dosen</th>
    </tr>
`;
jadwal.forEach(item => {
  jadwalHTML += `
    <tr>
      <td>${item.hari}</td>
      <td>${item.mataKuliah}</td>
      <td>${item.sks}</td>
      <td>${item.waktu}</td>
      <td>${item.dosen}</td>
    </tr>
  `;
});
jadwalHTML += `</table>`;
jadwalDiv.innerHTML = jadwalHTML;
app.appendChild(jadwalDiv);

// Kontak
const contactDiv = document.createElement("div");
contactDiv.className = "contact";
contactDiv.innerHTML = `
  <h2>Kontak</h2>
  <a href="${kontak.instagram}" target="_blank">Instagram</a>
  <a href="${kontak.gmail}">Gmail</a>
  <a href="${kontak.whatsapp}" target="_blank">WhatsApp</a>
`;
app.appendChild(contactDiv);
