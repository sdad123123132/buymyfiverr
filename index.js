const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
   console.log(`${msg.content}`)
  }
);


bot.on('message', msg => {
  if (msg.content === '!info.bot') {
    msg.reply("Hi There ```Im a bot named DeathBotzEye aka Nan0Byt3JB```");
  }
});

bot.on('message', msg => {
  if (msg.content === '!info.cube') {
    msg.reply(Eb);
  }
});


bot.login(process.env.token);