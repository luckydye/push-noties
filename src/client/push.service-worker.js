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
        self.registration.showNotification('Testing Push Notifications', {
            body: payload,
            icon: "/icon/icon-192x192.png",
        }).then(d => {
            console.log("nitification shown");
        }).catch(err => {
            console.error(err);
        })
    );
});

