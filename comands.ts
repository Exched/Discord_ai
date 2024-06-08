import { Message, MessageEmbed } from 'discord.js';

export default function createHelpEmbed(message: Message): MessageEmbed {
    const embed = new MessageEmbed()
        .setTitle('Help Menu')
        .setDescription('List of available commands:')
        .addField('!ping', 'Check the bot\'s latency.')
        .addField('!say <message>', 'Make the bot repeat your message.')
        .addField('!ask <question>', 'Ask the bot a question.')
        .setColor('BLUE');
    return embed;
}
