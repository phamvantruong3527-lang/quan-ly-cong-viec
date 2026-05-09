// File này chạy ngầm để đánh thức thông báo
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Lắng nghe lệnh hiển thị thông báo từ App
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        self.registration.showNotification(event.data.title, {
            body: event.data.body,
            icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            badge: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
        });
    }
});
