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
    reaction: "801379215864889344"
  },
  {
    triggers: ["lin", "crash", "krashc", "krach", "krasch", "krash", "kras", "krasc"],
    reaction: "800724990957453332"
  },
  {
    triggers: ["tommy", "mat", "lunch"],
    reaction: "768801484799868928"
  },
  {
    triggers: ["benny", "verkstad", "prod"],
    reaction: "768455727122612295"
  },
  {
    triggers: ["pia", "mat", "lunch"],
    reaction: "768801484698550282"
  },
  {
    triggers: ["jesper", "fysik", "matte"],
    reaction: "768803859920584704"
  },
  {
    triggers: ["vincent", "viktor", "instagram"],
    reaction: "768801484459999264"
  },
  {
    triggers: ["CNG", "Curt", "Nicolin", "Gymnasiet", "bäst"],
    reaction: "768102987285135400"
  }
]

exports.run = (message) => {
  reactions.forEach((item, i) => { // Loop thru react objects
    if(item.triggers.some(v => message.toString().toLowerCase().includes(v))) { // If message contains a trigger word
      message.react(item.reaction); // React on the message with the corresponding reaction
    }
  });
}
