//OTAwNzc5NDc5NTkxNDI0MDcx.YXGSQw.5yx4e18ifcWYF_4ueJrH_8KVfYM
require('dotenv').config()
const { Client, Intents } = require('discord.js');
const axios = require('axios').default;
const bot= new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] });
var APIKEY;
var TextChannelId;
bot.login(process.env.TOKEN)
bot.on('ready', ()=>{
console.log(process.env);
APIKEY=process.env.API_KEY;
TextChannelId=process.env.GENRAL_CHANNELID;
bot.channels.cache.get(TextChannelId).send("afkBot Active!");

})
bot.on('messageCreate', msg => {
    if(msg.channel.id==TextChannelId)
    {
        var message=msg.content;
        if(message=="!apex"|| message=="!Apex"){
            var dm= msg.content.substring(1);
            console.log(dm);
            console.log("YES");
            var apiurl='https://api.mozambiquehe.re/bridge?version=5&platform=PC&player=Rawglul&auth='+APIKEY;
            axios({
                method: 'get',
                url: apiurl,
                responseType: 'application/json'
              })
                .then(function (response) {
                    var apexname=response.data.global.name;
                    var brrank=response.data.global.rank.rankName;
                    var brrankdiv=response.data.global.rank.rankDiv;
                    var arenarank=response.data.global.arena.rankName;
                    var arenadiv=response.data.global.arena.rankDiv;
                    var selectedLegend=response.data.realtime.selectedLegend;
                    var currentStatus=response.data.realtime.currentStateAsText;
                    bot.channels.cache.get(TextChannelId).send(
                      "Apex Name: "+apexname+"\n"
                     +"Battley Royal Rank: "+brrank+"-"+brrankdiv+"\n"
                     +"Arena Rank: "+arenarank+"-"+arenadiv+"\n"
                     +"CurrentSelectedLegend: "+selectedLegend+"\n"
                     + "CurrentStatus: "+currentStatus +"\n"
                    );
                });
          
     
    }
}
})

