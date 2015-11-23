var slackAPI = require('slackbotapi');
var token = process.env.wEB_SLACK_TOKEN;
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
        channel: "#new_channels",
        username: "new_channels_bot",
        text: "new channel <#" + data.channel.id + "|" + data.channel.name +"> has been created",
    };
    slack.reqAPI("chat.postMessage",data);
});

