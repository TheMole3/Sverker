exports.run = (client, message, args, fs, config) => {
  message.delete(); // Delete the invokation
  let rMember = message.guild.member(message.mentions.users.array()[1]); // Get the first mentioned user
  if(args.slice(1).join(" ").length < 32) { // If the first argument is shorter than 32 chars
    rMember.setNickname(args.slice(1).join(" ")); // Set the mentioned user nickname to the provided one
  }
}
