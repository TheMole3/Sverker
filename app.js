const Discord = require("discord.js");

client = new Discord.Client();
fs = require("fs")
//const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
config = require("./config.json")
client.config = config;

var cron = require('node-cron');


client.on("ready", function() {
  console.log("Sverker startade")

  cron.schedule('10 8 * * 1,2,3,5', () => {
    client.channels.get("784328462155907072").send("@everyone Rita era fiskar!")
  });
  cron.schedule('10 10 * * 4', () => {
    client.channels.get("784328462155907072").send("@everyone Rita era fiskar!")
  });
})

client.on("message", message => {
  if(message.author.bot) return;

  var msg = message.toString().toLowerCase()
  if(["swag","cool"].some(v => msg.includes(v))) {
    message.react("768163480300814397")
  }

  if(["love","kärlek","älska","gilla"].some(v => msg.includes(v))) {
    message.react("768163144370618408")
  }

  if(["ledsen","tråk","sad","inte bra", "vill inte", "gillar inte", "tycker inte om", "hatar", "inte roligt"].some(v => msg.includes(v))) {
    message.react("768393037544947713")
  }

  var prefix = '<@!' + client.user.id + '>'
  if(message.content.indexOf(prefix) !== 0) return;
  // Define args
  var args;
  args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //Command reference
  try {if (fs.existsSync(`./commands/${command}.js`)) {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args, fs, config);
  }} catch (err) { console.error(err) }


})

client.login(config.token);
