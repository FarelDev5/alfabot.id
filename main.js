const start_button = document.getElementById('start')
start_button.addEventListener('click', function() {
  window.location.href = 'app/pages/boot.html'
})


    // Peta translasi (translation map)
    const translations = {
      "en": {
        welcome: "Folow Me",
        description: "This bot is a digital assistant designed to provide customer support with friendly and personalized interactions. Every response is delivered in Indonesian in an empathetic and supportive tone, ensuring a positive experience for every user.", 
        lang_button: "Let's get started"
      },
      "id": {
        welcome: "Ikuti Saya",
        description: "Bot ini adalah asisten digital yang dirancang untuk memberikan dukungan pelanggan dengan interaksi yang ramah dan personal. Setiap tanggapan disampaikan dalam bahasa Indonesia dengan nada yang empatik dan mendukung, memastikan pengalaman yang positif bagi setiap pengguna.", 
        lang_button: "Ayo Mulai"
      },
      "default": {
        welcome: "Folow Me",
        description: "This bot is a digital assistant designed to provide customer support with friendly and personalized interactions. Every response is delivered in Indonesian in an empathetic and supportive tone, ensuring a positive experience for every user.", 
        lang_button: "Let's get started"
      }
    };

    // Mendapatkan bahasa perangkat
    const deviceLanguage = navigator.language || navigator.userLanguage;
    const langCode = deviceLanguage.split("-")[0]; // Ambil kode bahasa utama (e.g., "en" dari "en-US")

    // Pilih terjemahan berdasarkan bahasa perangkat
    const selectedTranslations = translations[langCode] || translations["default"];

    // Menampilkan hasil translasi ke elemen dengan id tertentu
    document.getElementById("folowUs").innerText = selectedTranslations.welcome;
    document.getElementById("description-boot").innerText = selectedTranslations.description;
    document.getElementById("start").innerText = selectedTranslations.lang_button;