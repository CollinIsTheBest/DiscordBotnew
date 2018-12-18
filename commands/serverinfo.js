const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#5d95ef")
    .setThumbnail(sicon)
    .setFooter('Pudder#4412', 'https://i.imgur.com/Dhei3Mo.jpg')
    .setTimestamp()
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Roles",` ${message.guild.roles.size} Roles  \n Names : ${message.guild.roles.array()}`,true)
    .addField("Total Members", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
