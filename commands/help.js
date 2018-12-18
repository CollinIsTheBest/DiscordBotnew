const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .addField("Default Prefix", `>`)
        .addField("Moderation", `**Set prefix :** Make the bot have any prefix you desire\n<prefix><setprefix> <whatever you want>\n**Ban :** It will __ban__ any user as long the bot has a higher role\n<prefix><ban> <user> <reason>\n**Kick :** It will __kick__ any user as long the bot has a higher role\n<prefix><kick> <user> <reason>\n**Mute :** it will __mute__ an user for which ever amount of time you want\n<prefix><mute> <user> <HH:mm:ss>\n role, as long as the bot has a higher \n**Say :** It will say anything you want, have in mind this is onlgt for Admin's\n<prefix><say> <what you want to say>\n**Report :** It will report someone\n<prefix><report> <reason>\n**Poll : **It will make a poll and add a reaction for yes or no\n<prefix><poll> <question>
        **Warn : ** It will warn the player you want to warn\n<prefix><warn> <why you want to warn them>
        **Clear :** it will clear up 100 messages no older than 14 days\n<prefix><clear> <amount of messages>`)
        .addBlankField()
        .addField("Guild Commands", `**Server Info :** It wil show the server's info\n<prefix><serverinfo>\n**User Info : ** It will show you the bot's information\n<prefix><userinfo>\n**Bot Info :** it will show you the bot's information\n<prefix><serverinfo>\n`)
        .addBlankField()
        .addField("Money", `**Coins : **It will show your coins\n<prefix><coins>\n**Pay : **pay someone\n<prefix><pay><@user>`)
        .setFooter('Pudder#4412', 'https://i.imgur.com/Dhei3Mo.jpg')
        .setTimestamp()
        .setColor('#5d95ef');

    message.channel.send(botembed);
}

module.exports.help = {
    name: "help"
}
