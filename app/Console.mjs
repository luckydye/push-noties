import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

export default {
    log(...strList) {
        this.clear();
        console.log(...strList);
    },
    clear() {
        process.stdout.write("\r\x1b[K");
        setTimeout(() => {
            rl.prompt();
        }, 100);
    },
    async readLine(promp = "> ", callback = () => {}) {
        rl.setPrompt(promp);
        rl.prompt();

        rl.on('line', async (line) => {
            this.clear();
            const args = line.split(" ");
            if(args[0] != "") {
                await callback(args);
            }
        });
    },
    reset() {
        rl.prompt();
    }
}
