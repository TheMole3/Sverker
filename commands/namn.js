exports.run = (client, message, args, fs, config) => {
  message.delete()
  let rMember = message.guild.member(message.mentions.users.array()[1])
  if(args.slice(1).join(" ").length < 32) {
    rMember.setNickname(args.slice(1).join(" "))
  }
}
