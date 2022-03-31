const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

const prefix = "!";

const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("renvoie pong");

Client.on("ready", () => {
    console.log("bot opérationnel");

    //Client.application.commands.create(data);
    Client.guilds.cache.get("957697785598193736").commands.create(data);

});

Client.on("inviteCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "ping"){
            interaction.reply("pong");
        }
    }
});

Client.on("ready", () => {

    //Client.application.commands.create(data);
    Client.guilds.cache.get("957413357751787621").commands.create(data);

});
    //Welcome Message
Client.on("guildMemberAdd", member => {
    console.log("un membre est arrivé");
    Client.channels.cache.get("9957413358519337013").send(member.displayName + " viens d'arrivé")
    const embed = new Discord.RichEmbed ()       
        .setDescription("Oh !" + member.user + "vien de rejoindre le serveur :)")
        .setFooter("Nous sommes maintenant" + member.guild.memberCount)
        .setColor("DARK_AQUA")
        .setImage("https://static.fnac-static.com/multimedia/Images/FR/NR/8a/e1/4c/5038474/1540-1/tsp20130821120444/Tokyo-ghoul.jpg")
        .setTimestamp()
    member.channels.get("9957413358519337013").sendMessage(embed)
    member.guild.roles.get("958491421768298516")
});
    //Message Aurevoir
Client.on("guildMmemberRemove", member => {
    console.log("un membre vien de partir");
    Client.channels.cache.get("9957413358519337013").send(member.displayName + " vien de partir")
})

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!help
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("DARK_AQUA")
            .setTitle("Liste des commandes")
            .setAuthor("Auteur : iceXghoul", "https://static.fnac-static.com/multimedia/Images/FR/NR/8a/e1/4c/5038474/1540-1/tsp20130821120444/Tokyo-ghoul.jpg")
            .setDescription("Vous y trouverez la liste des commandes du bot")
            .setThumbnail("https://static.fnac-static.com/multimedia/Images/FR/NR/8a/e1/4c/5038474/1540-1/tsp20130821120444/Tokyo-ghoul.jpg")
            .addField("__help__", "Affiche la liste des commandes")
            .setImage("https://static.fnac-static.com/multimedia/Images/FR/NR/8a/e1/4c/5038474/1540-1/tsp20130821120444/Tokyo-ghoul.jpg");

        message.channel.send({ embeds: [embed]});
    }
});
    
Client.login("OTU3Mzc1ODAyOTgxMzU1NTMw.Yj93sg.ZHw_WsQsVpVkcJFIcg5GGKI5m2c");