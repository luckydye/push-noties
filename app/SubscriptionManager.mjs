import Logger from "./Console.mjs";

export default class SubscriptionManager {

    constructor() {
        this.subs = new Set();
    }

    add_sub(sub) {
        Logger.log("subscription added or updated");
        this.subs.add(sub);
    }

    all() {
        return [...this.subs];
    }

}