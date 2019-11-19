module.exports = {
    name: "say",
    aliases: ["bc", "boardcast"],
    category: "moderaton",
    description: "Says your input via the bot",
    usage: "<input>",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();

        if (args.lenght < 1) 
            return message.reply("Nothing to say").then(m => message.delete(5000))

        const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setColor(roleColor)
                .setDescription(args.slice(1).join(" "))
                .setTimestamp()
                .setImage(client.user.displayAvatarURL)
                .setAuthor(message.author.name, message.author.displayAvatarURL)
                .setFooter(client.user.username, client.user.displayAvatarURL)

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
}