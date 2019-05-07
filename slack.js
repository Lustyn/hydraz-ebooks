const { WebClient, RTMClient } = require('@slack/client');
const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);
const rtm = new RTMClient(token);

async function slackMessage(message, channel) {
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