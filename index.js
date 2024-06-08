"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const config_1 = tslib_1.__importDefault(require("./config"));
const commands_1 = tslib_1.__importDefault(require("./commands"));
const axios_1 = tslib_1.__importDefault(require("axios"));

const { intents, prefix, token, apiKey, apiUrl } = config_1.default;

const client = new discord_js_1.Client({
    intents,
    presence: {
        status: 'online',
        activities: [{
            name: `${prefix}help`,
            type: 'LISTENING'
        }]
    }
});

client.on('ready', () => {
    console.log(`Logged in as: ${client.user?.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift();

        switch (command) {
            case 'ping':
                const msg = await message.reply('Pinging...');
                await msg.edit(`Pong! The round trip took ${Date.now() - msg.createdTimestamp}ms.`);
                break;
            case 'say':
            case 'repeat':
                if (args.length > 0)
                    await message.channel.send(args.join(' '));
                else
                    await message.reply('You did not send a message to repeat, cancelling command.');
                break;
            case 'help':
                const embed = (0, commands_1.default)(message);
                embed.setThumbnail(client.user.displayAvatarURL());
                await message.channel.send({ embeds: [embed] });
                break;
            case 'ask':
                if (args.length > 0) {
                    const question = args.join(' ');
                    try {
                        const response = await axios_1.default.get(apiUrl, {
                            params: { question },
                            headers: { 'Authorization': `Bearer ${apiKey}` }
                        });
                        await message.reply(response.data.answer);
                    } catch (error) {
                        console.error('Error fetching the answer:', error);
                        await message.reply('Sorry, I could not get an answer to your question.');
                    }
                } else {
                    await message.reply('Please provide a question to ask.');
                }
                break;
        }
    }
});

client.login(token);
