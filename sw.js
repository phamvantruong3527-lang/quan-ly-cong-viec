self.addEventListener('install', (e) => self.skipWaiting());

self.addEventListener('message', (e) => {
    if (e.data.type === 'SCHEDULE_NOTIFICATION') {
        const delay = e.data.delay;
        setTimeout(() => {
            self.registration.showNotification("🔔 ĐẾN GIỜ RỒI SẾP!", {
                body: e.data.taskName,
                icon: "https://api.clippid.com/storage/v1/object/public/images/96a603c4-e867-4581-9b16-65103a89370b/1714902120000.jpg",
                vibrate: [200, 100, 200]
            });
        }, delay);
    }
});
