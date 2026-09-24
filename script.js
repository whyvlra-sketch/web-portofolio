/* Dark Mode Toggle */
const darkToggleBtn = document.getElementById('darkToggle');

darkToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        darkToggleBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i> Dark Mode';
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        darkToggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i> Light Mode';
    }
});

/* Logic Asisten AI */
const aiToggleBtn = document.getElementById('ai-toggle-btn');
const aiCloseBtn = document.getElementById('ai-close-btn');
const aiChatBox = document.getElementById('ai-chat-box');
const aiSendBtn = document.getElementById('ai-send-btn');
const aiInput = document.getElementById('ai-input');
const aiMessages = document.getElementById('ai-messages');

aiToggleBtn.addEventListener('click', () => aiChatBox.classList.toggle('d-none'));
aiCloseBtn.addEventListener('click', () => aiChatBox.classList.add('d-none'));

function sendAiMessage() {
    const query = aiInput.value.trim();
    if (!query) return;

    appendAiMsg(query, 'user-msg');
    aiInput.value = '';

    setTimeout(() => {
        const response = getVeroAiResponse(query.toLowerCase());
        appendAiMsg(response, 'bot-msg');
    }, 300);
}

aiSendBtn.addEventListener('click', sendAiMessage);
aiInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendAiMessage();
});

function appendAiMsg(text, msgClass) {
    const div = document.createElement('div');
    div.className = msgClass;
    div.innerHTML = `<span>${text}</span>`;
    aiMessages.appendChild(div);
    aiMessages.scrollTop = aiMessages.scrollHeight;
}

function getVeroAiResponse(input) {
    const randomReply = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // 1. Sapaan & Obrolan Ringan
    if (input.includes('halo') || input.includes('hai') || input.includes('p') || input.includes('helo') || input.includes('hi')) {
        return randomReply([
            "Hai! 👋 Ada yang bisa dibantu tentang profil Vero?",
            "Halo! Selamat datang di portofolio Vero. Mau tanya apa nih?",
            "Hai juga! Aku Vero Assistant. Bebas mau tanya seputar skill, project, atau kontak Vero ya!"
        ]);
    } 
    
    // 2. Profil / Biodata
    else if (input.includes('siapa') || input.includes('profil') || input.includes('nama') || input.includes('biodata') || input.includes('tentang')) {
        return randomReply([
            "Ini Veronika Putri, siswi kelas XI TJKT 2 SMKN 1 Blitar (lahir Blitar, 7 Nov 2009). Suka dunia coding, IT networking, musik, dan dance! ✨",
            "Vero itu siswi TJKT yang lagi fokus memperdalam web development & jaringan, tapi juga aktif di dunia musik dan dance. Kenalan lebih lanjut yuk!"
        ]);
    } 

    // 3. Sekolah & Jurusan
    else if (input.includes('sekolah') || input.includes('kelas') || input.includes('jurusan') || input.includes('smk')) {
        return randomReply([
            "Vero sekolah di SMKN 1 Blitar, jurusan Teknik Komputer dan Jaringan (TJKT), kelas XI TJKT 2! 💻",
            "Saat ini Vero duduk di kelas XI TJKT 2 SMKN 1 Blitar."
        ]);
    }

    // 4. Skill & Keahlian
    else if (input.includes('skill') || input.includes('keahlian') || input.includes('bisa') || input.includes('hobi')) {
        return randomReply([
            "Vero jago di bidang Junior Web Dev (HTML, CSS, JS, Bootstrap) & Cisco Packet Tracer. Selain IT, Vero juga suka main musik, nyanyi, dan dance! 🎶",
            "Gak cuma coding dan jaringan, Vero juga punya bakat di seni musik dan tari lho!"
        ]);
    } 

    // 5. Project & Karya
    else if (input.includes('project') || input.includes('proyek') || input.includes('karya') || input.includes('buat')) {
        return randomReply([
            "Beberapa project keren Vero diantaranya: Web Portofolio Interaktif, Aplikasi Kasir Sederhana dengan diskon otomatis, dan Simulasi Topologi Jaringan! 🚀",
            "Vero udah bikin beberapa project seperti web kasir JS, rancangan jaringan Cisco, dan web portofolio ini."
        ]);
    } 

    // 6. Musik / Lagu Favorit
    else if (input.includes('lagu') || input.includes('musik') || input.includes('song')) {
        return randomReply([
            "Lagu favorit Vero diantaranya ada 'Multo' dari Cup of Joe, 'Nobody New', dan 'Hurts So Good'. Cek di bagian About Me buat dengering langsung ya! 🎧",
            "Vero suka banget mendengarkan musik! Beberapa playlist favoritnya udah terpasang di section About Me."
        ]);
    }

    // 7. Kontak & Sosmed
    else if (input.includes('kontak') || input.includes('email') || input.includes('instagram') || input.includes('ig') || input.includes('github') || input.includes('hubungi')) {
        return randomReply([
            "Kamu bisa hubungi Vero via Email: veronikaputri2009@gmail.com, IG: @jstvrnk, atau kepoin kodingannya di GitHub: whyvlra-sketch! 📩",
            "Langsung gaskeun kontak ke IG @jstvrnk atau email di veronikaputri2009@gmail.com ya!"
        ]);
    } 

    // 8. Status
    else if (input.includes('status') || input.includes('pacar') || input.includes('suka')) {
        return "Ssstt... Vero udah punya seseorang yang disukai nih, namanya Bima dari kelas 11 TAV 1! 🤫✨";
    } 

    // 9. Terima Kasih
    else if (input.includes('makasih') || input.includes('terima kasih') || input.includes('thanks') || input.includes('thx')) {
        return randomReply([
            "Sama-sama! Senang bisa membantu 😊",
            "Yup, santai aja! Ada yang mau ditanyain lagi?",
            "Anytime! Semoga portofolio Vero berkesan ya ✨"
        ]);
    }

    // 10. Default Response
    else {
        return randomReply([
            "Wah, aku belum terlalu paham nih... 🤔 Coba tanyakan seputar 'profil', 'skill', 'project', 'lagu favorit', atau 'kontak' Vero ya!",
            "Waduh, pertanyaanmu di luar jangkauanku. Coba tanya tentang sekolah, skill, atau project Vero!"
        ]);
    }
}
