const { WebClient, RTMClient } = require('@slack/client');
const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);
const rtm = new RTMClient(token);

const censor = /<@(U[A-Z0-9]+)>/g;

async function slackMessage(message, channel) {
    message = message.replace(censor, "[redacted user]");
    console.log(`Sending slack message: ${message}`);
    await web.chat.postMessage({
        channel: channel,
        icon_url: "https://totalminer.ga/OkGE.jpg",
        as_user: false,
        username: "hydraz ebooks",
        text: message
    });
};

module.exports = { rtm, web, slackMessage };