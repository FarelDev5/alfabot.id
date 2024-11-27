const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const toggleBtn = document.getElementById('toggleBtn');
const adBanner = document.getElementById('adBanner');
const network = document.querySelector('.network--container')

// Toggle Sidebar and Overlay
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
});

// Close Sidebar when clicking on the overlay
overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});
sidebar.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});

// Sharing Function
function shareTo(platform) {
  const url = encodeURIComponent('https://fareldev5.github.io/alfabot.id/');
  const des = `Halo!! saya ingin menawarkan sebuah chatAi gratis yang dapat membantu anda dalam menyelesaikan masalah maupun mencari solusi! 😄
  Untuk memulai silahkan klik link ini ${url}`
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${des}`,
    twitter: `https://twitter.com/intent/tweet?url=${des}`,
    whatsapp: `https://api.whatsapp.com/send?text=${des}`,
    telegram: `https://t.me/share/url?url=${des}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${des}`
  };

  if (shareLinks[platform]) {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  } else {
    alert('Platform tidak didukung!');
  }
}
const translations = {
  "en": {
    welcome: "Welcome to the alphabet! Make your life easier with our chatbot features.",
    ui1: "Credit",
    ui2: "Donate",
    ui3: "Folow on Instagram",
    ui4: "Folow on Tiktok",
    ui5: "Feedback",
    ui6: "About Developer",
    ui7: "GPT Version",
    app_des: "Now that the alphabet is available for android, let's download it now with its full features!! 🥳"
  },
  "id": {
    welcome: "Selamat datang di Alfabot! Jadikan hidup Anda lebih mudah dengan fitur chatbot kami.",
    ui1: "Kredit",
    ui2: "Donasi",
    ui3: "Ikuti Di Instagram",
    ui4: "Ikuti Di Tiktok",
    ui5: "Masukan",
    ui6: "Tentang Developer",
    ui7: "Versi GPT",
    app_des: "Sekarang Alfabot telah tersedia untuk android, ayo unduh sekarang dengan fitur yang lengkap!! 🥳"
  },
  "default": {
    welcome: "Welcome to the alphabet! Make your life easier with our chatbot features.",
    ui1: "Credit",
    ui2: "Donate",
    ui3: "Folow on Instagram",
    ui4: "Folow on Tiktok",
    ui5: "Feedback",
    ui6: "About Developer",
    ui7: "GPT Version",
    app_des: "Now that the alphabet is available for android, let's download it now with its full features!! 🥳"
  }
};

// Mendapatkan bahasa perangkat
const deviceLanguage = navigator.language || navigator.userLanguage;
const langCode = deviceLanguage.split("-")[0]; // Ambil kode bahasa utama (e.g., "en" dari "en-US")

// Pilih terjemahan berdasarkan bahasa perangkat
const selectedTranslations = translations[langCode] || translations["default"];

// Menampilkan hasil translasi ke elemen dengan id tertentu
document.getElementById("description").innerText = selectedTranslations.welcome;
document.getElementById("credit-txt").innerText = selectedTranslations.ui1;
document.getElementById("donate-txt").innerText = selectedTranslations.ui2;
document.getElementById("folow-instagram").innerText = selectedTranslations.ui3;
document.getElementById("folow-tiktok").innerText = selectedTranslations.ui4;
document.getElementById("feedback-btn").innerText = selectedTranslations.ui5;
document.getElementById("devcnt-txt").innerText = selectedTranslations.ui6;
document.getElementById("gpt-btn").innerText = selectedTranslations.ui7;
document.getElementById("des--app").innerText = selectedTranslations.app_des;
var image = '/app/pages/res/lang/draw_en.png'


function checkInternetConnection() {
  if (navigator.onLine) {
    document.getElementById('ground').style.display = 'none'
    document.querySelector('.background--connect').style.display = 'none'
    document.getElementById('iframe--content').src = 'https://chat.cxgenie.ai?aid=b7cc484b-fe50-42d0-bf7e-fc2c5e23a139'
  } else {
    if (deviceLanguage == 'id-ID') {
      var image = '/app/pages/res/lang/draw_id.png'
      console.log(deviceLanguage)
    }
    document.getElementById('ground').style.background = `url(${image})`
    document.getElementById('ground').style.backgroundPosition = 'center'
    document.getElementById('ground').style.backgroundSize = '65%'
    document.getElementById('ground').style.backgroundAttachment = 'fixed'
    document.getElementById('ground').style.backgroundRepeat = 'no-repeat'
    document.getElementById('ground').style.display = 'block'
    document.querySelector('.background--connect').style.display = 'block'
    document.getElementById('iframe--content').src = '_blank'
  }
}
checkInternetConnection()

// Tambahkan event listener untuk memantau perubahan status koneksi
window.addEventListener('online', function() {
  location.reload(true)
  checkInternetConnection()
})
window.addEventListener('offline', () => checkInternetConnection());
