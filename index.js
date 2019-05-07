require('dotenv').config();
const { rtm, slackMessage } = require("./slack");
let chain;

(async () => {
    chain = await require("./chain");
    slackMessage(chain.generate(50), "C3KUJEY7M");

    rtm.on('message', async (message) => {
        if (message.subtype && message.subtype === 'bot_message') {
            return;
        } else if (typeof message.text === "undefined") {
            return;
        }
    
        console.log(`(channel:${message.channel}) ${message.user}: ${message.text}`);
    
        if (message.text.includes("category"))
            await slackMessage(chain.generate(100), message.channel);
    });
    
    rtm.start();
})();