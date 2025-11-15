document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // DAFTAR PERTANYAAN & JAWABAN (Q&A) - TOTAL 31
    // =================================================================
    const qaData = [
        // ... (Pertanyaan 1 s/d 28) ...
        { 
            question: '1. Kenapa saya harus bergabung dengan OPALP melalui DV TEAM..?', 
            audioPath: 'audio/jawaban1.mp3', 
            narrative: 'Legalitas dan Keamanan Dana Tim Investasi DV\n\n...' // (Konten utuh)
        },
        // ... (dan seterusnya pertanyaan 2 s/d 28) ...

        // ===== INI PERTANYAAN DARI DOCX =====
        { 
            question: '29. Jika pengguna Opalp sudah jutaan di Indonesia, bagaimana DV Team menyikapinya?', 
            audioPath: 'audio/jawaban29.mp3', // <-- AUDIO UNTUK Q29
            narrative: 'Pengguna Opalp di indonesia belum jutaan pengguna.\n\nPerlu diketahui bahwa tim OPALP di Indonesia juga tidak diam saja.\n\nSaat ini, mereka sudah aktif berkomunikasi dengan BAPPEBTI dan KOMINFO...\n\n...' // (Konten utuh seperti di docx)
        },
        { 
            question: '30. Alamat dompet blockchain (TRC20) terkait OPALP, bagaimana jika OPALP sudah tidak ada?', 
            audioPath: 'audio/jawaban30.mp3', // <-- AUDIO UNTUK Q30
            narrative: 'Secara teknis, pihak platform atau broker tidak memiliki kuasa penuh untuk mengakses alamat USDT TRC20 Anda.\n\nNamun, tingkat kendali mereka sangat tergantung pada jenis dompet yang Anda gunakan: \n\n1. Dompet kustodian (wallet on-platform)\n...\n\n2. Dompet non-kustodian (wallet off-platform)\n...\n\nBagi seorang trader, dompet kustodian (nomor 1) menawarkan keuntungan signifikan...\n\n...' // (Konten utuh seperti di docx)
        },
        
        // ===== INI PERTANYAAN BARU YANG ANDA TAMBAHKAN =====
        { 
            question: '31. Bagaimana cara menjelaskan kerja OPALP... (binary option/judi)?!', 
            audioPath: 'audio/jawaban31.mp3', // <-- AUDIO UNTUK Q31 (BARU)
            narrative: 'OPALP bukan sistem tebak-tebakan, tapi sistem trading kontrak opsi berbasis analisa sinyal dan volume pasar nyata.\n\nFokusnya bukan pada keberuntungan, tapi pada mekanisme manajemen resiko, akurasi analisa, dan stabilitas sistem.\n\nBinary option : Hanya taruhan antara kamu dan sistem. Kalau prediksi benar, kamu dapat persentase tetap (misal 80%), kalau salah, rugi total. Tidak ada transaksi riil di pasar, semua hasilnya tergantung algoritma internal platform.\n\nKontrak opsi : Sistemnya berbasis perdagangan kontrak real-time dengan harga pasar global sebagai acuan (price feed internasional).\nArtinya, hasil tidak ditentukan oleh platform, tapi oleh pergerakan harga pasar sebenarnya.\n\nDi sini, kamu bukan “bertaruh”, tapi membuka kontrak posisi jangka pendek berdasarkan analisa sinyal.\n\nBinary Option: Tujuan utamanya spekulatif (untung-untungan)\nKontrak opsi di OPALP: Tujuannya mengoptimalkan strategi analisa algoritmik dan sinyal yang dibuat oleh tim riset yaitu DV TEAM\nJadi pengguna hanya mengikuti sinyal yang sudah dianalisa dengan dasar data, bukan sekedar tebak-tebakan.\n\nSumber profit perusahaan juga jelas\nOPALP mendapatkan keuntungan bukan dari kerugian pengguna, tapi dari fee transaksi dan biaya penarikan, persis seperti exchange profesional lain (Binance, OKX, Bitget, dll).\n\nJadi semakin banyak aktivitas trading dari pengguna, semakin besar profit perusahaan, bukan karena ada yang kalah, tapi karena ada volume perdagangan.'
        }
    ];

    // =================================================================
    // KODE APLIKASI (Struktur dan Fungsi Tidak Diubah)
    // =================================================================

    // Ambil Elemen DOM
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');
    const enterBtn = document.getElementById('enterBtn');
    const backBtn = document.getElementById('backBtn');
    
    const audioPlayer = document.getElementById('audioPlayer');
    const playlistElement = document.getElementById('playlist');
    const nowPlayingElement = document.getElementById('nowPlaying');

    // Elemen untuk Narasi (sebelumnya Lirik)
    const showNarrativeBtn = document.getElementById('showLyricsBtn'); 
    const narrativeOverlay = document.getElementById('lyricsOverlay'); 
    const closeNarrativeBtn = document.getElementById('closeLyricsBtn'); 
    const narrativeTitle = document.getElementById('lyricsTitle'); 
    const narrativeContent = document.getElementById('lyricsContent'); 

    let currentIndex = -1;

    // 1. Buat Daftar Pertanyaan di HTML
    function populateQuestionList() {
        playlistElement.innerHTML = '';
        
        qaData.forEach((qa, index) => {
            const li = document.createElement('li');
            li.textContent = qa.question; 
            li.dataset.index = index;
            
            li.addEventListener('click', () => {
                playAnswer(index);
            });
            
            playlistElement.appendChild(li);
        });
    }

    // 2. Fungsi untuk Memutar Audio Jawaban
    function playAnswer(index) {
        if (index < 0 || index >= qaData.length) return;

        currentIndex = index;
        const qa = qaData[index];
        
        audioPlayer.src = qa.audioPath; 
        audioPlayer.play();
        
        nowPlayingElement.textContent = `Memutar Jawaban...`;
        
        narrativeTitle.innerText = qa.question; 
        narrativeContent.innerText = qa.narrative; 

        document.querySelectorAll('#playlist li').forEach((li, i) => {
            if (i === index) {
                li.classList.add('active');
            } else {
                li.classList.remove('active');
            }
        });
    }

    // 3. Pindah ke jawaban berikutnya saat selesai
    audioPlayer.addEventListener('ended', () => {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= qaData.length) {
            nextIndex = 0; // Kembali ke pertanyaan pertama
        }
        playAnswer(nextIndex);
    });

    // 4. Navigasi Slide
    enterBtn.addEventListener('click', () => {
        slide1.classList.remove('active');
        slide2.classList.add('active');
        
        if(currentIndex ===-1 || audioPlayer.paused) {
             playAnswer(0); 
        }
    });

    backBtn.addEventListener('click', () => {
        slide2.classList.remove('active');
        slide1.classList.add('active');
    });

    // 5. Fungsi untuk menampilkan narasi
    showNarrativeBtn.addEventListener('click', () => {
        let qaToShow;
        if (currentIndex === -1) {
            qaToShow = qaData[0];
        } else {
            qaToShow = qaData[currentIndex];
        }
        
        narrativeTitle.innerText = qaToShow.question;
        narrativeContent.innerText = qaToShow.narrative;
        
        narrativeOverlay.classList.remove('hidden');
    });

    closeNarrativeBtn.addEventListener('click', () => {
        narrativeOverlay.classList.add('hidden');
    });


    // Inisialisasi
    populateQuestionList();
});
