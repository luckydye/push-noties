
## Subscriptions

https://w3c.github.io/push-api/#subscription-deactivation

"Each subscription is unique to a service worker. The endpoint for the subscription is a unique capability URL"

"A push subscription is removed when service worker registration is cleared."

As soon as the subed person loads the page again, the sub will be added back into the new system. Maybe there is a way to get the subscription enpoints out of OneSignal somehow?

## Workers

### update workers

On worker file byte difference, the old worker stays in controle, until the page gets loaded again and the new worker transitions from a waiting state into activated state.

## Opt-int

Subscribe to a specific thing - like a news feed.

## Support

No way to support this in ios devices, only macos is possible at the moment.


## Working on

- Chrome(Canary) on MacOS ✅
- Firefox on MacOS ✅
- Safari on MacOS ❔ (APNS nesecery, no clue how to apple)

- Chrome on Windows ✅
- Firefox on Windows ✅
- Edge on Windows ✅

- Chrome on Android ✅

- IPad / IPhone (IOS) ❌

Check ```chrome://gcm-internals/``` on chrome if something is not working.