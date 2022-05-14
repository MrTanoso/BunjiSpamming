const Discord = require("discord.js")
const client = new Discord.Client(
    {intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]}
)

client.login(process.emv.token)

client.on("ready",()=> {
    console.log("Bot Online")
})
