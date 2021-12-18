import Console from "./Console.mjs";
import SubscriptionManager from "./SubscriptionManager.mjs";
import env from "./env.mjs";

const VAPID_PRIVATE_KEY = env.privateKey;
const VAPID_PUBLIC_KEY = env.publicKey;

// Use the web-push library to hide the implementation details of the communication
// between the application server and the push service.
// For details, see https://tools.ietf.org/html/draft-ietf-webpush-protocol and
// https://tools.ietf.org/html/draft-ietf-webpush-encryption.
import webPush from 'web-push';

if (!VAPID_PRIVATE_KEY || !VAPID_PUBLIC_KEY) {
    console.log("You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY " +
        "environment variables. You can use the following ones:");
    console.log(webPush.generateVAPIDKeys());
    throw new Error("");
}
// Set the keys used for encrypting the push messages.
webPush.setVapidDetails(
    'https://example.com/',
    VAPID_PRIVATE_KEY,
    VAPID_PUBLIC_KEY
);

const subscription_manager = new SubscriptionManager();

async function sendNotification(body = {
    subscription: null,
    delay: 0,
    ttl: 60,
    payload: null,
}) {
    const subscription = body.subscription;
    const payload = body.payload;
    const options = {
        TTL: body.ttl
    };

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            webPush.sendNotification(subscription, payload, options)
                .then(function (e) {
                    resolve(e);
                })
                .catch(function (error) {
                    reject(error);
                });
        }, body.delay * 1000);
    })
}

export default {

    init(app, route) {
        app.get(route + 'vapidPublicKey', function (req, res) {
            res.send(VAPID_PRIVATE_KEY);
        });

        app.post(route + 'register', function (req, res) {
            const subscription = req.body.subscription;
            subscription_manager.add_sub(subscription);

            res.sendStatus(201);
        });
    },

    async sendNotificationToAll(body) {
        const payload = ((new TextEncoder()).encode(body.text)).buffer;

        console.log(payload);

        for (let sub of subscription_manager.all()) {
            await sendNotification({
                subscription: sub,
                delay: 0,
                ttl: 1,
                payload: Buffer.from(payload),
            }).then((e) => {
                Console.log("Sent succenssful", e);
            }).catch(err => {
                Console.log(err);
            })
        }
    }
}
