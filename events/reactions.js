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
    triggers: ["cnc", "lin", "crash", "krashc", "krach", "krasch", "krash", "krcshs", "kras", "krasc", "je lim",, "ye", "ye lin", "prod", "verkstad"],
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
    triggers: ["cng", "curt", "nicolin", "gymnasiet", "bäst"],
    reaction: "768102987285135400"
  },
  {
    triggers: ["raymond", "ramond", "programmering", "3d", "ryss", "rysk", "spel"],
    reaction: "839403988659077120"
  },
  {
    triggers: ["popham", "david", "cool", "stilig"],
    reaction: "810942253664174090"
  }, {
    triggers: ["gusse", "gustav", "tråkig", "inte rolig", "buzzkill", "mentor"],
    reaction: "810940404756512798"
  }, {
    triggers: ["emil", "idrott", "lat"],
    reaction: "810941556416577586"
  }, {
    triggers: ["danira", "mentor", "samhäll"],
    reaction: "810944075317641237"
  }
]

exports.run = (message) => {
  reactions.forEach((item, i) => { // Loop thru react objects
    if(item.triggers.some(v => message.toString().toLowerCase().includes(v))) { // If message contains a trigger word
      message.react(item.reaction); // React on the message with the corresponding reaction
    }
  });
}
