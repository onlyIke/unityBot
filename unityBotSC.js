const { Client, IntentsBitField } = require('discord.js');
const cron = require('node-cron');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    scheduleMessages();
});

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

function scheduleMessages() {
    try {
        console.log('Scheduling messages...');

        // Add a delay before scheduling the message
        setTimeout(() => {
            const channel = client.channels.cache.get('854157997647593472'); // Replace with actual channel ID
            const user = client.users.cache.get('297563330531295232'); // Replace with actual user ID

            if (channel && user) {
                console.log('Sending scheduled message...');
                channel.send(`${user.toString()} is cool`);
            } else {
                console.log('Channel or user not found.');
            }
        }, 10000); // 10 seconds delay
    } catch (error) {
        console.error('Error scheduling messages:', error);
    }
}





client.login('MTE0NDUwNTk2MDE0NTEwNDk5Nw.Gj0VOn.dufxsc4L4VSeRFCT4onP3vE5a8km25DS5UXvto');
