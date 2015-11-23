var slackAPI = require('slackbotapi');
var token = process.env.WEB_SLACK_TOKEN;
var botName = process.env.BOT_NAME;
var targetChannel = process.env.TARGET_SLACK_CHANNEL;

if (!token) {
    console.error("slack web api token is not set");
    console.error("please `export wEB_SLACK_TOKEN`");
    process.exit(1);
}
var slack = new slackAPI({
    'token': token,
    'logging': true,
    'autoReconnect': true
});

slack.on('channel_created', function (data) {
    var data = {
        channel: targetChannel,
        username: botName,
        text: "new channel <#" + data.channel.id + "|" + data.channel.name +"> has been created",
    };
    slack.reqAPI("chat.postMessage",data);
});

