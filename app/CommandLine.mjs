import chalk from "chalk";
import Console from "./Console.mjs";

const defaultPrompt = `${chalk.green("➡️")}  `;

// commands
const cmd_line_commands = {
    "push": (await import("./commands/push.mjs")).default
}

export default {
    prompt() {
        Console.readLine(defaultPrompt, async args => {
            const cmd = cmd_line_commands[args[0]];
            if (cmd != null) {
                await cmd.execute(...args.slice(1));
            } else {
                console.error("Invalid command.");
            }
        });
    }
}
