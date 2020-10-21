const Discord = require("discord.js");

client = new Discord.Client();
//const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
config = require("./config.json")
client.config = config;

client.on("ready", function() {
  console.log("Sverker startade")
})

client.on("message", ( message) => {
  // Ignore all bots
  if (message.author.bot) return;

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

})

client.login(config.token);
