self.addEventListener('install', function (event) {
    // Perform install steps
});

// Register event listener for the 'push' event.
self.addEventListener('push', function (event) {
    console.log("Push event", event);

    const payload = event.data ? event.data.text() : 'no payload';

    // Keep the service worker alive until the notification is created.
    event.waitUntil(
        // Show a notification with title 'ServiceWorker Cookbook' and use the payload
        // as the body.
        self.registration.showNotification('ServiceWorker Cookbook', {
            body: payload,
        }).then(d => {
            console.log("shown nitification", d);
        }).catch(err => {
            console.error(err);
        })
    );
});

