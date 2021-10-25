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
                    var Data=response.data;
                    var apexname=Data.global.name;
                    var brrank=Data.global.rank.rankName;
                    var brrankdiv=Data.global.rank.rankDiv;
                    var arenarank=Data.global.arena.rankName;
                    var arenadiv=Data.global.arena.rankDiv;
                    var selectedLegend=Data.realtime.selectedLegend;
                    var currentStatus=Data.realtime.currentStateAsText;
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

