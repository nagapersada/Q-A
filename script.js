document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // DAFTAR PERTANYAAN & JAWABAN (Q&A) - TOTAL 31
    // =================================================================
    const qaData = [
        // (Pertanyaan 1 s/d 28)
        { 
            question: '1. Kenapa saya harus bergabung dengan OPALP melalui DV TEAM..?', 
            audioPath: 'audio/jawaban1.mp3', 
            narrative: 'Legalitas dan Keamanan Dana Tim Investasi DV\n\nLegalitas Opalp Exchanges Inc\nTerdaftar secara resmi di negara bagian Colorado, AS...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '2. Kenapa ada pembatasan modal?', 
            audioPath: 'audio/jawaban2.mp3', 
            narrative: 'Ini bertujuan untuk mendorong kamu terlebih dahulu memahami ritme, mengeksekusi dengan stabil, dan membentuk struktur...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '3. Mengapa DV TEAM tidak bekerjasama dengan bursa lain seperti Binance atau OKX?', 
            audioPath: 'audio/jawaban3.mp3', 
            narrative: 'OPALP berfokus pada inovasi dalam perdagangan kontrak opsi, dengan visi bersama untuk menciptakan keuntungan bersama bagi ketiga pihak...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '4. Apa yang harus kita lakukan jika setiap kali kita melakukan transaksi, lima tahap perdagangan semuanya gagal?', 
            audioPath: 'audio/jawaban4.mp3', 
            narrative: 'Harap tenang, DV TEAM memiliki mekanisme perlindungan risiko yang lengkap...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '5. Mengapa ketika kita transaksi dengan persentase 1% dari modal, hasilnya berbeda?', 
            audioPath: 'audio/jawaban5.mp3', 
            narrative: 'Tingkat keuntungan bersifat dinamis dan berfluktuasi, berada di antara 85%–90%...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '6. Apakah bonus diberikan oleh asisten? Bagaimana saya tahu jika sudah menerima bonus?', 
            audioPath: 'audio/jawaban6.mp3', 
            narrative: 'Semua bonus dikenali dan dibagikan secara otomatis oleh sistem AI, tanpa campur tangan manual...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '7. Bagaimana saya bisa memotivasi teman-teman saya untuk bergabung?', 
            audioPath: 'audio/jawaban7.mp3', 
            narrative: 'Menunjukkan bukti keuntungan dan penarikan adalah cara yang paling sederhana...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '8. Teman saya mengatakan ini seperti skema Ponzi, bagaimana saya harus menjelaskannya?', 
            audioPath: 'audio/jawaban8.mp3', 
            narrative: 'Skema ponzi dan model piramida pada dasarnya menggunakan iming-iming keuntungan tinggi untuk menarik investor...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '9. Bagaimana jika member sakit atau meninggal dunia, apakah bisa diwariskan?', 
            audioPath: 'audio/jawaban9.mp3', 
            narrative: 'Masalah ini sangat penting, kita semua tahu bahwa kematian tidak dapat diprediksi, tetapi hal ini dapat direncanakan...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '10. Selamat malam Profesor, apakah waktu sinyal perdagangan bisa diubah?', 
            audioPath: 'audio/jawaban10.mp3', 
            narrative: 'Sinyal pertama adalah pukul 12:10, sinyal kedua adalah pukul 20:10...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '11. Tentang lima anggota baru yang deposit 1000 USD, apakah mereka belum jadi anggota biasa?', 
            audioPath: 'audio/jawaban11.mp3', 
            narrative: 'Jumlah deposit tidak memiliki batasan...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '12. Kenapa domain opalp.com di Whois hanya sampai 2026?', 
            audioPath: 'audio/jawaban12.mp3', 
            narrative: 'Perlu dipahami bahwa masa berlaku domain tidak menentukan usia atau kredibilitas sebuah platform...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '13. Kalau anggota sudah 1jt orang..apakah keuangan OPALP tidak akan goyah?', 
            audioPath: 'audio/jawaban13.mp3', 
            narrative: 'sistem keuangan Opalp tidak akan goyang meskipun pengguna sudah mencapai 1 juta orang...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '14. Kalau dilihat dari detail SSL Certificate... webnya cuman 3 bulan...?!', 
            audioPath: 'audio/jawaban14.mp3', 
            narrative: 'Point Penting :\n1. Durasi SSL (3 bulan) bukan ukuran legalitas perusahaan...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '15. Kenapa di OPALP kalau mau WD ada biaya?', 
            audioPath: 'audio/jawaban15.mp3', 
            narrative: 'Faktanya, Hampir semua broker resmi ada biaya WD, hanya bentuknya berbeda...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '16. Kok perusahaan bisa memberikan bonus pencapaian peringkat... Apa gak jebol?', 
            audioPath: 'audio/jawaban16.mp3', 
            narrative: 'Pertama, kita harus paham dulu apa itu bonus volume trading, yaitu komisi dari total transaksi bawahan...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '17. Sequoia Capital menjadi penjamin. Gimana cara verifikasi sertifikat tersebut?', 
            audioPath: 'audio/jawaban17.mp3', 
            narrative: 'Memang benar, kalau sebuah perusahaan besar seperti Sequoia Capital Operations masuk ke ranah investasi publik di Opalp...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '18. Jika pasar kripto turun drastis, apakah sistem DV TEAM tetap stabil?', 
            audioPath: 'audio/jawaban18.mp3', 
            narrative: 'Ini adalah pertanyaan yang sangat bagus. Memang benar pasar kripto terkadang mengalami penurunan besar...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '19. Mengapa pencapaian target tim selalu dikaitkan dengan sinyal tambahan?', 
            audioPath: 'audio/jawaban19.mp3', 
            narrative: 'Sinyal tambahan bukanlah “bonus cuma-cuma”, melainkan bentuk penghargaan atas tanggung jawab...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '20. Apakah DV TEAM tidak akan rugi memberikan begitu banyak bonus?', 
            audioPath: 'audio/jawaban20.mp3', 
            narrative: 'Tidak akan ada kerugian! Model inti dari proyek ini adalah kerja sama tiga pihak yang saling menguntungkan...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '21. Bagaimana dengan legalitas OPALP dan DVTEAM..?', 
            audioPath: 'audio/jawaban21.mp3', 
            narrative: 'Ini adalah pertanyaan yang sangat penting, dan kamu sudah menanyakannya dengan tepat...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '22. Apakah ada kemungkinan OPALP itu scam..?', 
            audioPath: 'audio/jawaban22.mp3', 
            narrative: 'Jawabannya bukan dari janji, tapi dari sistem dan struktur yang kami bangun di DV TEAM...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '23. Apakah legalitas OPALP ini bisa dipercaya dan dipertanggungjawabkan?', 
            audioPath: 'audio/jawaban23.mp3', 
            narrative: 'Opalp Meningkatkan Sistem Kepatuhan Global, DV TEAM Bersama-sama Memasuki Tahap Baru Kepercayaan Internasional...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '24. Apa fungsi legalitas tersebut buat anggota DV-TEAM..?', 
            audioPath: 'audio/jawaban24.mp3', 
            narrative: 'Banyak anggota sudah mengetahui bahwa jauh sebelumnya Opalp di bawah pengawasan ketat FinCEN...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '25. Prof, apakah uang saya aman jika ditempatkan di platform?', 
            audioPath: 'audio/jawaban25.mp3', 
            narrative: 'Kekhawatiran ini sangat wajar.\nDi dunia internet sekarang, sulit membedakan mana yang benar dan mana yang palsu...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '26. Kenapa opalp tidak tersedia di AppStore prof?', 
            audioPath: 'audio/jawaban26.mp3', 
            narrative: 'Ini pertanyaan yang sangat bagus.\nOpalp memang pernah tersedia di Google Play dan App Store...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '27. Di group telegram kita ini kenapa belum pernah diadakan obrolan Prof?', 
            audioPath: 'audio/jawaban27.mp3', 
            narrative: 'Saat ini, kami tidak mengadakan obrolan suara atau diskusi grup di Telegram...\n(Konten lengkap seperti di docx)' 
        },
        { 
            question: '28. Kenapa OPALP hanya terdaftar FINCEN dan tidak terdaftar di SEC?', 
            audioPath: 'audio/jawaban28.mp3', 
            narrative: 'Kita perlu belajar membedakan antara opini dengan fakta...\n(Konten lengkap seperti di docx)' 
        },
        
        // ===== INI PERTANYAAN DARI DOCX =====
        { 
            question: '29. Jika pengguna Opalp sudah jutaan di Indonesia, bagaimana DV Team menyikapinya?', 
            audioPath: 'audio/jawaban29.mp3', // <-- AUDIO UNTUK Q29
            narrative: 'Pengguna Opalp di indonesia belum jutaan pengguna.\n\nPerlu diketahui bahwa tim OPALP di Indonesia juga tidak diam saja.\n\nSaat ini, mereka sudah aktif berkomunikasi dengan BAPPEBTI dan KOMINFO terkait proses legalisasi dan kepatuhan operasional di Indonesia.\n\nSeluruh data penting seperti profil perusahaan, identitas pemilik, laporan keuangan, hingga sistem layanan sudah dikirimkan sebagai bagian dari tahap verifikasi.\n\nBahkan, biaya awal untuk proses perizinan juga telah disetorkan sesuai prosedur yang berlaku.\n\nPemerintah Indonesia sendiri baru akan merilis lisensi resmi untuk platform fintech dan aset kripto antara Maret hingga Juni 2026. Berdasarkan informasi yang ada, OPALP termasuk dalam kandidat utama yang sedang dipertimbangkan untuk mendapatkan lisensi tersebut.\n\nArtinya, begitu regulasi nasional ini resmi diberlakukan, OPALP berpotensi menjadi salah satu platform yang diakui dan berizin penuh di Indonesia.\n\nIni menunjukkan komitmen perusahaan untuk bekerja sesuai hukum dan memperkuat kepercayaan semua anggota.\n\nKita semua tau, mengurus izin di Indonesia bukan perkara mudah.\nProsesnya panjang, penuh tahapan, dan kadang di lapangan ada banyak “biaya tak terduga” yang bikin investor berpikir dua kali untuk mengurus izin usaha atau segala hal di indonesia.\n\nSering kali, izin belum keluar, tapi sudah banyak pihak yang datang meminta sesuatu.\n\nInilah sebabnya banyak perusahaan memilih berhati-hati dan membangun fondasi yang kuat dulu di luar negeri, baru kemudian mengurus izin di Indonesia ketika semua sistem sudah stabil.\n\nBukan karena tidak mau patuh, tapi karena mereka ingin memastikan setiap langkah legalitasnya benar-benar bersih dan berkelanjutan, bukan hanya formalitas di atas kertas.'
        },
        { 
            question: '30. Alamat dompet blockchain (TRC20) terkait OPALP, bagaimana jika OPALP sudah tidak ada?', 
            audioPath: 'audio/jawaban30.mp3', // <-- AUDIO UNTUK Q30
            narrative: 'Secara teknis, pihak platform atau broker tidak memiliki kuasa penuh untuk mengakses alamat USDT TRC20 Anda.\n\nNamun, tingkat kendali mereka sangat tergantung pada jenis dompet yang Anda gunakan: \n\n1. Dompet kustodian (wallet on-platform)\nIni adalah dompet yang dibuat dan diatur oleh bursa atau broker, seperti Binance, KuCoin, atau Indodax atau Opalp\nKunci pribadi (private key) ada di tangan platform.\n...\n(Konten lengkap seperti di docx)\n\n2. Dompet non-kustodian (wallet off-platform)\nIni adalah dompet yang dibuat dan dikendalikan sepenuhnya oleh Anda sendiri, seperti Trust Wallet, MetaMask (jika dikonfigurasi untuk jaringan TRON), atau TronLink.\n...\n(Konten lengkap seperti di docx)\n\nBagi seorang trader, dompet kustodian (nomor 1) menawarkan keuntungan signifikan...\n\n...(Konten lengkap seperti di docx)'
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
