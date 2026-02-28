// Ambil elemen tombol dan input
const btnSimpan = document.getElementById("btn-simpan");
const inputUsername = document.getElementById("username");
const inputNama = document.getElementById("nama");
const inputBio = document.getElementById("bio");
const dataTabel = document.getElementById("data-tabel");

// Event ketika tombol Save diklik
btnSimpan.addEventListener("click", function () {
    // Ambil nilai dari form
    const username = inputUsername.value.trim();
    const nama = inputNama.value.trim();
    const bio = inputBio.value.trim();

    // Validasi sederhana memastikan tidak kosong
    if (username === "" || nama === "" || bio === "") {
        alert("Semua field harus diisi!");
        return;
    }

    // Buat baris baru di tabel
    const tr = document.createElement("tr");

    // Buat kolom untuk Username, Name, Bio
    const tdUsername = document.createElement("td");
    tdUsername.textContent = username;

    const tdNama = document.createElement("td");
    tdNama.textContent = nama;

    const tdBio = document.createElement("td");
    tdBio.textContent = bio;

    // Buat kolom Action (misalnya tombol Delete)
    const tdAction = document.createElement("td");
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDelete.addEventListener("click", function () {
        tr.remove(); // hapus baris ini
    });
    tdAction.appendChild(btnDelete);

    // Masukkan semua kolom ke baris
    tr.appendChild(tdUsername);
    tr.appendChild(tdNama);
    tr.appendChild(tdBio);
    tr.appendChild(tdAction);

    // Tambahkan baris ke tbody
    dataTabel.appendChild(tr);

    // Reset form setelah simpan
    inputUsername.value = "";
    inputNama.value = "";
    inputBio.value = "";
});