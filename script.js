// script.js

// --- 1. DATA ARTIKEL LENGKAP (BLOG) ---
const blogData = [
    {
        title: "HBO's Harry Potter Remake: Era Baru atau Bayang-bayang Masa Lalu?",
        summary: "Trailer perdana dari HBO akhirnya rilis! Dengan cast baru dan jadwal tayang Natal 2026, mampukah serial ini menggantikan nostalgia film aslinya?",
        fullText: `
            <p>Dunia sihir kembali dibuka! Serial adaptasi <i>Harry Potter</i> dari HBO akhirnya mengonfirmasi jadwal rilis <i>Season 1: Philosopher's Stone</i> pada <strong>25 Desember 2026</strong>. Berbeda dengan filmnya, serial ini menjanjikan format satu buku untuk satu musim penuh (10 tahun rencana tayang), yang artinya banyak adegan dari novel yang dulu dipotong akan kembali dihidupkan—seperti kemunculan hantu Peeves!</p>
            <p>HBO mengambil arah yang jauh lebih gelap dan membumi (<i>grounded</i>) dibandingkan film aslinya. Trio emas kita kini diperankan oleh wajah-wajah baru: <strong>Dominic McLaughlin (Harry)</strong>, <strong>Arabella Stanton (Hermione)</strong>, dan <strong>Alastair Stout (Ron)</strong>. Tentu saja, *reboot* ini tidak lepas dari pro dan kontra di kalangan *Potterhead*, terutama terkait pemilihan *cast* baru untuk karakter ikonik.</p>
            <p>Apakah HBO mampu menyaingi nostalgia film aslinya? Yang pasti, Natal tahun ini kita akan kembali ke Hogwarts dengan nuansa yang sepenuhnya baru.</p>
            <br>
            <hr style="border-top: 1px dashed var(--gold); margin-bottom: 10px;">
            <p style="font-size: 0.9rem;"><strong>Sumber Referensi:</strong> <br>
            <a href="https://au.variety.com/2026/tv/news/harry-potter-trailer-hbo-release-date-ron-hermione-34643/" target="_blank" style="color: var(--gryffindor-red);">Variety: 'Harry Potter' Trailer: Christmas 2026 Release Date Set on HBO</a></p>
        `
    },
    {
        title: "Steel Ball Run '2nd Stage': Kapan Kelanjutan Balapan Melintasi Devil's Palm Rilis?",
        summary: "Setelah penayangan perdana yang sukses di Netflix pada Maret 2026 lalu, kapankah petualangan Johnny dan Gyro berlanjut?",
        fullText: `
            <p>Bagi para penggemar JoJo's Bizarre Adventure, tahun 2026 adalah tahun yang paling ditunggu. Setelah penayangan perdana <i>1st Stage</i> dari adaptasi anime <strong>Steel Ball Run (Part 7)</strong> pada 19 Maret 2026 lalu di Netflix, dunia internet langsung meledak. Animasi dari David Production dipadukan dengan dinamika Johnny Joestar dan Gyro Zeppeli benar-benar memenuhi ekspektasi.</p>
            <p>Lalu pertanyaannya: Kapan episode selanjutnya dirilis? Melalui <i>teaser trailer</i> terbaru pada 28 Maret lalu, Netflix memberikan cuplikan balapan menyeberangi padang pasir sejauh 750 mil menuju zona mematikan yang disebut <strong>"Devil's Palm"</strong>.</p>
            <p>Kabar baiknya, Netflix telah mengumumkan pada awal April bahwa <i>2nd Stage</i> akan dirilis secara mingguan (<i>weekly release</i>) mulai <strong>Musim Gugur (Fall) 2026</strong>. Sambil menunggu, kita bisa mengulang kembali adegan-adegan awal balapan epik ini!</p>
            <br>
            <hr style="border-top: 1px dashed var(--gold); margin-bottom: 10px;">
            <p style="font-size: 0.9rem;"><strong>Sumber Referensi:</strong> <br>
            <a href="https://en.wikipedia.org/wiki/Steel_Ball_Run:_JoJo%27s_Bizarre_Adventure" target="_blank" style="color: var(--gryffindor-red);">Anime News Network / Wikipedia: Netflix Streams JoJo's Bizarre Adventure Part 7</a></p>
        `
    },
    {
        title: "Krisis Sang Raja: Ada Apa dengan RRQ Hoshi di MPL ID Season 17?",
        summary: "Performa anjlok, tekanan fans memuncak. RRQ Hoshi sedang berada di ujung tanduk musim ini. Mampukah mereka bangkit?",
        fullText: `
            <p>Mobile Legends Professional League Indonesia (MPL ID) Season 17 menjadi saksi salah satu masa paling kelam bagi skuad Raja dari Segala Raja, <strong>RRQ Hoshi</strong>. Jika biasanya mereka nyaman di papan atas klasemen, musim ini mereka benar-benar berada di krisis ganda.</p>
            <p>Masuknya roster baru seperti <strong>Yehezkiel</strong> dan <strong>Kuroky</strong> untuk menemani Super Kenn dan kawan-kawan ternyata belum membuahkan hasil instan. Rentetan kekalahan telak—seperti saat dihabisi ONIC (13-2) tanpa ampun dalam tempo cepat—menunjukkan RRQ sedang kesulitan beradaptasi dengan <i>meta tempo cepat</i> (Flex Pick) musim ini.</p>
            <p>Tekanan dari <i>Kingdom</i> (penggemar RRQ) kini sudah mencapai puncaknya hingga akhir April ini. Beberapa pertandingan krusial ke depan akan menjadi penentu hidup matinya sang Raja. Apakah mereka berhasil memperbaiki <i>decision making</i> di <i>mid-late game</i> atau justru dinasti mereka runtuh lebih awal sebelum <i>Playoffs</i>?</p>
            <br>
            <hr style="border-top: 1px dashed var(--gold); margin-bottom: 10px;">
            <p style="font-size: 0.9rem;"><strong>Sumber Referensi:</strong> <br>
            <a href="https://teamrrq.com/news/mpl-id-s17-w1-awal-buruk-buat-rrq-hoshi" target="_blank" style="color: var(--gryffindor-red);">Official Team RRQ: MPL ID S17 W1: Awal Buruk buat RRQ Hoshi</a><br>
            <a href="https://esports.merahputih.com/read/rrq-hoshi-di-ujung-tanduk-lima-faktor-penentu-kebangkitan-lawan-dewa-united-di-mpl-id-s17-18495" target="_blank" style="color: var(--gryffindor-red);">Esports ID: RRQ di Ujung Krisis (April 2026)</a></p>
        `
    }
];

// --- 2. RENDER ARTIKEL & MODAL ARTIKEL ---
const blogContainer = document.getElementById('blog-container');
const articleModal = document.getElementById('article-modal');
const articleTitle = document.getElementById('article-title');
const articleBody = document.getElementById('article-body');
const closeArticleBtn = document.querySelector('.close-article');

// Render card blog
blogData.forEach((blog, index) => {
    const card = document.createElement('div');
    card.classList.add('blog-card');
    
    card.innerHTML = `
        <h3>${blog.title}</h3>
        <p style="color: #ccc;">${blog.summary}</p>
        <button class="magic-btn read-more-btn" data-index="${index}">Baca Perkamen 📜</button>
    `;
    blogContainer.appendChild(card);
});

// Event listener untuk tombol "Baca Perkamen"
document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        const selectedArticle = blogData[index];
        
        // Memasukkan data ke dalam modal
        articleTitle.innerText = selectedArticle.title;
        articleBody.innerHTML = selectedArticle.fullText;
        
        // Tampilkan modal
        articleModal.style.display = 'block';
    });
});

// Tutup modal artikel
closeArticleBtn.addEventListener('click', () => {
    articleModal.style.display = 'none';
});

// --- 3. FITUR GALLERY LIGHTBOX ---
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const images = document.querySelectorAll(".gallery-img");
const closeBtn = document.querySelector(".close-btn");

images.forEach(img => {
    img.addEventListener("click", function() {
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
    });
});

closeBtn.addEventListener("click", () => lightbox.style.display = "none");

// --- 4. TUTUP MODAL JIKA KLIK AREA LUAR ---
window.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
    if (event.target === articleModal) {
        articleModal.style.display = "none";
    }
});

// --- 5. VALIDASI FORM OWL POST (CONTACT) ---
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    if(nama === "" || email === "" || pesan === "") {
        formMessage.style.color = "darkred";
        formMessage.style.display = "block";
        formMessage.innerHTML = "Gagal! Mantra tidak lengkap. Isi semua kolom!";
    } else {
        formMessage.style.color = "green";
        formMessage.style.display = "block";
        formMessage.innerHTML = `✨ Pesan terkirim! Burung hantu sedang dalam perjalanan membawa surat dari ${nama}.`;
        
        contactForm.reset();
        
        setTimeout(() => {
            formMessage.style.display = "none";
        }, 4000);
    }
});