const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = 'token'

// memo: 以下のbotを招待する必要あり。private botなので松原に問い合わせてください
// https://discord.com/developers/applications/837926651920777216/oauth2

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  const allPairs = [{team: '1', pairs: ['a', 'b', 'c', 'd']}, {team: '2', pairs: ['a', 'b', 'c']}, {team: '3', pairs: ['a', 'b', 'c']}, {team: '4', pairs: ['a', 'b']}]

  // const result = []

  allPairs.forEach((teampair) => {
    teampair.pairs.forEach((p) => {
      // result.push(`${teampair.team}${p}`)
      msg.guild.channels.create(`${teampair.team}${p}`, {type: 'voice'}).then(channel => channel.setParent('837924162446032948'))
    })
  })
  allPairs.map(p => p.team).forEach((team) => {
    // result.push(`team-${team}`)
    msg.guild.channels.create(`team-${team}`, {type: 'voice'}).then(channel => channel.setParent('837924162446032948'))
  })
  // console.log(result)
});

client.login(TOKEN);
