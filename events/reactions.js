var reactions = [ // Define reaction and triggers
  {
    triggers: ["sverker", "kul", " le ", "smile", "glad", ":)"],
    reaction: "768162328084480041"
  },
  {
    triggers: ["swag","cool", "b)"],
    reaction: "768163480300814397"
  },
  {
    triggers: ["love","kärlek","älska","gilla", "<3"],
    reaction: "768163144370618408"
  },
  {
    triggers: ["ledsen","tråk","sad","inte bra", "vill inte", "gillar inte", "tycker inte om", "hatar", "inte roligt", ":(", "gråta"],
    reaction: "768393037544947713"
  },
  {
    triggers: ["hampus", "teknik", "cad"],
    reaction: "801771174186319902"
  },
  {
    triggers: ["lin", "crash", "krashc", "krach", "krasch", "krash"],
    reaction: "801770591543623690"
  },
  {
    triggers: ["tommy", "mat", "lunch"],
    reaction: "801770591543623690"
  },
  {
    triggers: ["benny", "verkstad", "prod"],
    reaction: "801771174186319902"
  },
  {
    triggers: ["pia", "mat", "lunch"],
    reaction: "801771174186319902"
  },
  {
    triggers: ["jesper", "fysik", "matte"],
    reaction: "801770591543623690"
  },
  {
    triggers: ["vincent", "instagram"],
    reaction: "801771174186319902"
  }
]

exports.run = (message) => {
  reactions.forEach((item, i) => { // Loop thru react objects
    if(item.triggers.some(v => message.toString().toLowerCase().includes(v))) { // If message contains a trigger word
      message.react(item.reaction); // React on the message with the corresponding reaction
    }
  });
}
