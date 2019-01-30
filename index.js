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
  if (msg.content === '!ping') {
    msg.reply("Pong");
  }
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  newUsers.set(member.id, member.user);

  if (newUsers.size > 10) {
    const defaultChannel = guild.channels.find(channel => channel.permissionsFor(guild.me).has("SEND_MESSAGES"));
    const userlist = newUsers.map(u => u.toString()).join(" ");
    defaultChannel.send("Welcome our new users!\n" + userlist);
    newUsers.clear();
  }
});


bot.on('guildMemberAdd', (guildMember) => {
   guildMember.addRole(guildMember.guild.roles.find(role => role.name === "member"));
}
});

bot.login(process.env.token);
