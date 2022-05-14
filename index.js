const Discord = require("discord.js")
const client = new Discord.Client(
    {intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]}
)

client.login("OTcxMTIwMzg5NzEzNDQwNzg4.GlW1lS.o4XshREfvphDcnUh-hMXk9jHpYK6zyEWwOp1fU")

client.on("ready",()=> {
    console.log("Bot Online")
})
