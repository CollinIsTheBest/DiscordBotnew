const Discord = require('discord.js'); //Do .poll for a poll and then question

exports.run = async (bot, message, args, ops) => {

	if (!message.member.roles.find("name", "@everyone")) {
		message.channel.send('Invalid permissions.');
		return;
	}

    // Check for input
    if (!args[0]) return message.channel.send('Proper usage: a.poll <question>');

    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("#5d95ef")
        .setFooter('Pudder#4412', 'https://i.imgur.com/Dhei3Mo.jpg')
        .setTimestamp()
        .setDescription(args.join(' '))
        .setTitle(`Poll Created By ${message.author.username}`);

    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅"); //Only 2 reacts.
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};

module.exports.help = {
  name: "poll"
}
