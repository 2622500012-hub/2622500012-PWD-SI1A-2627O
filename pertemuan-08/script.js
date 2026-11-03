const menuNavigasi = document.querySelectorAll("#navMenu a");
const semuaHalaman = document.querySelectorAll("main section");
function tampilkanHalaman(idHalaman) {

    semuaHalaman.forEach(function(halaman) {
        halaman.style.display = "none";
    });

const halamanDipilih = document.getElementById(idHalaman);
    if (halamanDipilih) {
        halamanDipilih.style.display = "block";
    }
}

menuNavigasi.forEach(function(menu) {
    menu.addEventListener("click", function(event) {
        event.preventDefault();

const idHalaman = menu.getAttribute("href").substring(1);

        tampilkanHalaman(idHalaman);
        if (navMenu && navToggle) {
            navMenu.classList.remove("nav-open");
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.setAttribute("aria-label", "Buka navigasi");
        }
    });

});
tampilkanHalaman("home");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
if (navToggle && navMenu) {
    navToggle.addEventListener("click", function() {

const menuTerbuka = navMenu.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", menuTerbuka);
    navToggle.setAttribute(
    "aria-label",
    menuTerbuka ? "Tutup navigasi" : "Buka navigasi"
    );

});

}

const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");
if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", function(event) {

const nama = document.getElementById("nama").value.trim();
const email = document.getElementById("email").value.trim();
const telepon = document.getElementById("telepon").value.trim();
const alamat = document.getElementById("alamat").value.trim();
const jenisKelamin = document.getElementById("jenis_kelamin").value;
const password = document.getElementById("password").value;

    formFeedback.textContent = "";
    formFeedback.style.color = "red";

    if (nama.length < 3) {
    event.preventDefault();
    formFeedback.textContent = "Nama harus diisi minimal 3 karakter.";
    return;
}

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            event.preventDefault();
            formFeedback.textContent = "Masukkan alamat email yang benar.";
            return;    
        }

    if (!/^[0-9]+$/.test(telepon)) {
            event.preventDefault();
            formFeedback.textContent = "Nomor telepon hanya boleh berisi angka.";
            return;
        }    

    if (alamat === "") {
            event.preventDefault();
            formFeedback.textContent = "Alamat harus diisi.";
            return;
        }    

    if (jenisKelamin === "") {
            event.preventDefault();
            formFeedback.textContent = "Silakan pilih jenis kelamin.";
            return;
        }    

    if (password === "") {
            event.preventDefault();
            formFeedback.textContent = "Password harus diisi.";
            return;
        }    

    });

    contactForm.addEventListener("input", function() {
        formFeedback.textContent = "";
    });

    contactForm.addEventListener("reset", function() {
        formFeedback.textContent = "";
    });
}
