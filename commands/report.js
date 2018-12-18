const Discord = require("discord.js");

module.exports.run = async (bot, message ,args) =>{
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Couldn't find user.");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#5d95ef")
  .setFooter('Pudder#4412', 'https://i.imgur.com/Dhei3Mo.jpg')
  .setTimestamp()
  .addField("Reported User", `${rUser} With ID: ${rUser.id}`)
  .addField("Reported By", `${message.author} With ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);


  let reportschannel = message.guild.channels.find(`name`, "logs");
  if(!reportschannel) return message.channel.send("Couldn't find reports channel")


  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);


  return;
}

module.exports.help = {
  name: "report"
}
