const { RichEmbed } = require('discord.js'),
      { get } = require('node-superfetch');

exports.run = async (client, message, args, color) => {

  let m = await message.channel.send(`*Please Wait...*`);
  try {
  const { body } = await get('https://api-to.get-a.life/meme')

  let memeEmbed = new RichEmbed()
  .setColor(`#5d95ef`)
  .setTitle(body.text)
  .setImage(body.url)
  .setTimestamp()
  .setFooter('Pudder#4412', 'https://i.imgur.com/Dhei3Mo.jpg');

  message.channel.send(memeEmbed).then(() => { m.delete();});
  } catch (e) {
    message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later!`);
  }
}

exports.conf = {
    aliases: [],
    cooldown: "5"
}

exports.help = {
    name: "meme",
    description: "Get a random meme",
    usage: "meme"
}
