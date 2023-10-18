const { Client, Intents } = require('discord.js');
const cron = require('node-cron');
const TOKEN = process.env.DISCORD_TOKEN;

const client = new Client({
    intents: [
        Intents.FLAGS.Guilds,
        Intents.FLAGS.GuildMembers,
        Intents.FLAGS.GuildMessages,
        Intents.FLAGS.MessageContent,
    ],
});

// Add this line to define the version variable
const { version } = require('discord.js');

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

console.log(`discord.js version: ${version}`);
client.login(TOKEN);
