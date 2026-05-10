self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('message', (event) => {
    if (event.data.type === 'SET_ALARM') {
        const { taskName, triggerTime } = event.data;
        const delay = triggerTime - Date.now();

        if (delay > 0) {
            setTimeout(() => {
                self.registration.showNotification("🔔 LỊCH SỰ KIỆN ĐỨC TÚ", {
                    body: taskName,
                    icon: "https://api.clippid.com/storage/v1/object/public/images/96a603c4-e867-4581-9b16-65103a89370b/1714902120000.jpg",
                    tag: "alarm-" + Date.now(),
                    requireInteraction: true, // Giữ thông báo trên màn hình cho đến khi sếp bấm
                    vibrate: [200, 100, 200]
                });
            }, delay);
        }
    }
});
