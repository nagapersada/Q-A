const CACHE_NAME = 'dvnp-qa-v2'; // <-- VERSI BARU (v2)
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    './images/1000171790.jpg', 
    './images/1000173031.jpg', 
    './icons/icon-192x192.png',
    './icons/icon-512x512.png',
    
    // !!! DAFTAR LENGKAP 31 AUDIO JAWABAN ANDA !!!
    // Pastikan nama file audio Anda sesuai dengan daftar ini
    './audio/jawaban1.mp3',
    './audio/jawaban2.mp3',
    './audio/jawaban3.mp3',
    './audio/jawaban4.mp3',
    './audio/jawaban5.mp3',
    './audio/jawaban6.mp3',
    './audio/jawaban7.mp3',
    './audio/jawaban8.mp3',
    './audio/jawaban9.mp3',
    './audio/jawaban10.mp3',
    './audio/jawaban11.mp3',
    './audio/jawaban12.mp3',
    './audio/jawaban13.mp3',
    './audio/jawaban14.mp3',
    './audio/jawaban15.mp3',
    './audio/jawaban16.mp3',
    './audio/jawaban17.mp3',
    './audio/jawaban18.mp3',
    './audio/jawaban19.mp3',
    './audio/jawaban20.mp3',
    './audio/jawaban21.mp3',
    './audio/jawaban22.mp3',
    './audio/jawaban23.mp3',
    './audio/jawaban24.mp3',
    './audio/jawaban25.mp3',
    './audio/jawaban26.mp3',
    './audio/jawaban27.mp3',
    './audio/jawaban28.mp3',
    './audio/jawaban29.mp3',
    './audio/jawaban30.mp3',
    './audio/jawaban31.mp3'
];

// Event Install: Menyimpan cache aset
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache dibuka');
                // Menggunakan addAll(urls) bisa gagal jika salah satu file tidak ada.
                // Lebih baik menambah satu per satu dan menangani error (opsional tapi lebih aman)
                const promises = urlsToCache.map(url => {
                    return cache.add(url).catch(err => {
                        console.warn('Gagal cache:', url, err);
                    });
                });
                return Promise.all(promises);
            })
            .then(() => self.skipWaiting()) // Paksa service worker baru untuk aktif
    );
});

// Event Activate: Membersihkan cache lama
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Menghapus cache lama:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Ambil alih kontrol halaman
    );
});

// Event Fetch: Menyajikan aset dari cache jika ada
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Jika ada di cache, kembalikan dari cache
                if (response) {
                    return response;
                }
                // Jika tidak, ambil dari jaringan
                return fetch(event.request).catch(err => {
                    console.error('Fetch gagal:', err);
                });
            }
        )
    );
});
