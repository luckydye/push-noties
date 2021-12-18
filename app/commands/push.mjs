import push from "../push.mjs";

export default {
    execute(text) {
        console.log("Sending", text, "as push notification.");
        return push.sendNotificationToAll({
            text: text,
        }).catch(err => {
            console.error(err);
        });
    }
}
