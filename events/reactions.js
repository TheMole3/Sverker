var reactions = [ // Define reaction and triggers
  {
    triggers: ["sverker", "kul", " le ", "smile", "glad", ":)"],
    reaction: "768162328084480041"
  },
  {
    triggers: ["swag","cool", "B)"],
    reaction: "768163480300814397"
  },
  {
    triggers: ["love","kärlek","älska","gilla", "<3"],
    reaction: "768163144370618408"
  },
  {
    triggers: ["ledsen","tråk","sad","inte bra", "vill inte", "gillar inte", "tycker inte om", "hatar", "inte roligt", ":("],
    reaction: "768393037544947713"
  }
]

exports.run = (message) => {
  reactions.forEach((item, i) => { // Loop thru react objects
    if(item.triggers.some(v => message.toString().toLowerCase().includes(v))) { // If message contains a trigger word
      message.react(item.reaction); // React on the message with the corresponding reaction
    }
  });
}
