self.addEventListener('install', function (event) {
    // Perform install steps
});

// Register event listener for the 'push' event.
self.addEventListener('push', function (event) {
    console.log("Push event", event);
    // Keep the service worker alive until the notification is created.
    event.waitUntil(
        // Show a notification with title 'ServiceWorker Cookbook' and body 'Alea iacta est'.
        self.registration.showNotification('ServiceWorker Cookbook', {
            body: 'Alea iacta est',
        })
    );
});
