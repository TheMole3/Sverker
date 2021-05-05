const Discord = require("discord.js"); // Import Discord.js library
const client = new Discord.Client(); // Create new bot client
const fs = require("fs") // Import file reading library
const cron = require('node-cron');
const config = require("./config.json") // Import config file
client.config = config; // Add config to discord client object

/*client.on("ready", function() { // When discord bot is ready
  console.log(client.user.tag + " started");

  cron.schedule('10 8 * * 1,2,3,5', () => { // Schedule fish message for 8:10 mon-wed and fri
    client.channels.cache.get("784328462155907072").send("@everyone Rita era fiskar!");
  });
  cron.schedule('10 10 * * 4', () => { // Schedule fish message for 10:10 thu
    client.channels.cache.get("784328462155907072").send("@everyone Rita era fiskar!");
  });
})*/

client.on("message", message => { // When discord client gets a message
  if(message.author.bot) return; // If the author of the message is a bot, do nothing
  require(`./events/reactions.js`).run(message); // Start the reaction script

  var prefix = '<@!' + client.user.id + '>'; // Set the command prefix of the bot @Sverker
  if(message.content.indexOf(prefix) !== 0) return; // If the message does not start with the prefix, return
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

client.login(config.token); // Login the bot with the token specified in config
