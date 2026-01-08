// ===============================
// NAVBAR
// ===============================
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = () => navbarNav.classList.toggle("active");

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// ===============================
// NAVBAR SCROLL
// ===============================
window.addEventListener("scroll", () => {
  document
    .querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// ===============================
// DATA KERANJANG
// ===============================
let cart = [];
let totalHarga = 0;

// ===============================
// MENU + / - BUTTON
// ===============================
document.querySelectorAll(".menu-card").forEach((card) => {
  const plus = card.querySelector(".btn-plus");
  const minus = card.querySelector(".btn-minus");
  const qtyText = card.querySelector(".qty");

  const nama = card.querySelector(".menu-card-title").innerText;
  const harga = parseInt(card.querySelector(".menu-card-price").dataset.price);

  let qty = 0;

  plus.onclick = () => {
    qty++;
    qtyText.innerText = qty;
    totalHarga += harga;

    const item = cart.find((i) => i.nama === nama);
    if (item) {
      item.qty++;
    } else {
      cart.push({ nama, harga, qty: 1 });
    }
  };

  minus.onclick = () => {
    if (qty > 0) {
      qty--;
      qtyText.innerText = qty;
      totalHarga -= harga;

      const item = cart.find((i) => i.nama === nama);
      item.qty--;

      if (item.qty === 0) {
        cart = cart.filter((i) => i.nama !== nama);
      }
    }
  };
});

// ===============================
// TOMBOL KERANJANG
// ===============================
document.querySelector("#shopping-cart").onclick = (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Keranjang masih kosong 🛒");
    return;
  }

  let pesan = "🛒 ISI KERANJANG\n\n";

  cart.forEach((item, i) => {
    pesan += `${i + 1}. ${item.nama} x${item.qty} = Rp ${
      item.harga * item.qty
    }.000\n`;
  });

  pesan += `\nTotal Bayar: Rp ${totalHarga}.000`;

  alert(pesan);
};

// ===============================
// CTA BELI SEKARANG
// ===============================
document.querySelector(".cta").onclick = (e) => {
  e.preventDefault();
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
};

// ===============================
// FORM KONTAK
// ===============================
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = form.querySelector('input[placeholder="nama"]').value;
  const email = form.querySelector('input[placeholder="email"]').value;
  const hp = form.querySelector('input[placeholder="no hp"]').value;

  if (!nama || !email || !hp) {
    alert("Mohon lengkapi semua data 🙏");
  } else {
    alert("Pesan berhasil dikirim ☕");
    form.reset();
  }
});

// ===============================
// SEARCH DUMMY
// ===============================
document.querySelector("#search").onclick = (e) => {
  e.preventDefault();
  alert("Fitur pencarian belum tersedia 🔍");
};

// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ===============================
// FEATHER ICONS
// ===============================
feather.replace();
