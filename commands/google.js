const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let google = args.slice(0).join('+');

        let link = `https://www.google.com/search?q=` + google;
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()

    .setColor("#5d95ef")
    .setTimestamp()
    .addField('Action:', 'Searching on Google')
	.addField("Word:", `${args.slice(0).join(' ')}`)
	.addField('Link:', `${link}`)
	.setFooter('Pudder#4412', 'https://i.imgur.com/Dhei3Mo.jpg');

	message.channel.send(embed);
	message.author.send(`You have searched for ${link} in ${ message.guild.name}`);

}

module.exports.help = {
  name: "google"
}
