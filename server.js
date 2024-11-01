let Discord = require("discord.js");
let client = new Discord.Client();
let client2 = new Discord.Client();
let client3 = new Discord.Client();
let { MessageEmbed } = require("discord.js");
const express = require("express");
const app = express();
const axios = require('axios');
const allowedRole = '1208186017337581699';
const owner = '1115992837775953951';
const imagepermsRuined = '1115992837775953951';
const disbut = require('discord-buttons');

disbut(client2);

app.listen(3000, () => {
  console.log("Bies-bot is waking up.");
})

client.on("ready", () => {
  client.user.setActivity("pizza in the oven", { type: "WATCHING" });
});

client2.on("ready", () => {
  client2.user.setActivity("some game stats.", { type: "WATCHING" });
});

client3.on("ready", () => {
  client3.user.setActivity("Beep block!", { type: "PLAYING" });
});


app.get('/', (req, res) => {
     res.send(`Hi`);
});

app.get("/2", (req, res) => {
  res.sendFile(__dirman + 'index.html');
})

app.get("/3", (req, res) => {
  res.sendFile(__dirman + '/index.html');
})

app.get("/test", async (req, res) => {
    const channel = client.channels.cache.get("1232077870432522371")
    const themessage = await channel.messages.fetch('1236313294873296907')
    if (themessage) {
      var text = themessage.content.split(' ').slice(1).join(' ');
      res.send(text);
    } else {
      res.send(`no data`);
    }
})

app.get("/test/2", async (req, res) => {
  const channel = client.channels.cache.get("1232077870432522371");
  const themessage = await channel.messages.fetch('1236313294873296907');
  if (themessage) {
    const wordToRemove = themessage.content.split(' ')[4];
    const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` no4`);
    themessage.edit(updatedWords);
  }
  res.send(`ok`);
})

app.get("/test/3", async (req, res) => {
  const channel = client.channels.cache.get("1232077870432522371");
  const themessage = await channel.messages.fetch('1236313294873296907');
  if (themessage) {
    const wordToRemove = themessage.content.split(' ')[6];
    const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` no6`);
    themessage.edit(updatedWords);
  }
  res.send(`ok`);
})

app.get("/beepblock", (req, res) => {
  const channel = client.channels.cache.get("1239185184566284339"); 
  if (channel) {
    var cool = req.param("cool");
    const embed = new MessageEmbed()
    channel.send(`${cool} heeft een kick barrier aan geraakt. ik zou ff checken of hij hackt of niet\ndoe **/ban ${cool}** als hij hackt`);
    res.send(`hello :D`);
  }
})

app.get("/ruineddevelopment", async (req, res) => {
  var effectname = req.param("effectname");
  var code = req.param("code");
  let codeschannel = client3.channels.cache.get("1250458426279198731");
  const theguild = client3.guilds.cache.get('1215024343051010069');
  const member = theguild.members.cache.find(member => member.user.username === effectname);
  if (member) {
    if (member.roles.cache.has('1217504460893589624')) {
      res.send(`hello 3`);
    } else {
      const messages = await codeschannel.messages.fetch({ limit: 100 });
      const hiMessage = messages.find(msg => msg.content === `${code}`);
      if (hiMessage) {
        member.roles.add('1217504460893589624');
        res.send(`hello`);
      } else {
        res.send(`hello 2`);
      }
    }
  } else {
    res.send(`hello 1`);
  }
}) 

client.on("message", async (message) => {
  if (message.author.bot) {
  } else {
    if (message.channel.type === 'dm') {
      const command = message.content.toLowerCase()
      if (command === "hi") {
        message.author.send("hi");
      }
    } else {
    const command = message.content.toLowerCase()
    let role = message.guild.roles.cache.find(
      (role) => role.id === "1182686162108813373"
    );
    if (role) {
      message.member.roles.add(role);
    }
    if (command === "hi") {
      message.channel.send("hi");
    }
    if (command.match(/https?:\/\/\S+/) && !command.match("https://tenor.com/view/")) {
      if (message.guild.id === '1115963224462999613') {
        if (message.channelId === "1182414660855672953" || message.channelId === "1182059785768677478") {
      } else {
        if (message.member.roles.cache.some(role => role.id === allowedRole) || (message.member.roles.cache.some(role => role.id === owner)) || (message.member.roles.cache.some(role => role.id === imagepermsRuined))) {
        } else {
          message.delete();
          message.channel.send(
          `You can not send links here buddy. <@${message.author.id}>`
          );
        }
      }
    }
    }
    if (command.match("discord.gg")) {
      if (message.channelId === "1182414660855672953") {
      } else {
        message.delete();
        message.channel.send(
          `You can not send invites here buddy. <@${message.author.id}>`
        );
      }
    }
    if (command.match("cunt")) {
      message.delete();
      message.channel.send(
        `You can not be harassing people here buddy. <@${message.author.id}>`
      );
    }
    if (command.match("faggot")) {
      message.delete();
      message.channel.send(
        `You can not be harassing people here buddy. <@${message.author.id}>`
      );
    }
    if (message.content.match("ugc") && message.content.match("cant")) {
       message.channel.send(
        `If you can not claim the free UGC then you have:\nNot completed all the tasks,\nOr not joined the right group,\n\nThis is the right group: https://www.roblox.com/groups/34857249/Trappers-VS-Runners#!/about`
      );
    } else if (message.content.match("ugc") && message.content.match("can't")) {
      message.channel.send(
        `If you can not claim the free UGC then you have:\nNot completed all the tasks,\nOr not joined the right group,\n\nThis is the right group: https://www.roblox.com/groups/34857249/Trappers-VS-Runners#!/about`
      );
    } else if (message.content.match("ugc") && message.content.match("can not")) {
      message.channel.send(
        `If you can not claim the free UGC then you have:\nNot completed all the tasks,\nOr not joined the right group,\n\nThis is the right group: https://www.roblox.com/groups/34857249/Trappers-VS-Runners#!/about`
      );
    }
    if (command.match("nigger") || command.match("nigga") || command.match("negro") || command.match("njgga") || command.match("njgger")) {
      message.delete();
      message.channel.send(
         `You can not be saying the n-word to people here buddy. <@${message.author.id}>`
      );
      message.member.roles.add('1237388503243821056');
    }
    if (command.match("faggot")) {
      message.delete();
      message.channel.send(
        `You can not be harassing people here buddy. <@${message.author.id}>`
      );
    }
    if (command.startsWith("!kick")) {
      if (message.member.hasPermission('KICK_MEMBERS')) {
        const mention = message.mentions.members.first();
        if (mention) {
          mention.kick()
          .then(member => {
            message.channel.send(`${mention} has been kicked L`);
          })
          .catch(error => {
             message.channel.send(`Failed :(`);
          });
        } else {
          message.channel.send("Do @ someone to kick them");
        }
      }
    }
      if (command.startsWith("!ban")) {
        if (message.member.hasPermission('BAN_MEMBERS')) {
          const mention = message.mentions.members.first();
          if (mention) {
            mention.ban()
            .then(member => {
              message.channel.send(`${mention} has been banned L`);
            })
            .catch(error => {
               message.channel.send(`Failed :(`);
            });
          } else {
            message.channel.send("Do @ someone to ban them");
          }
        }
      }
      if (message.channel.id === '1212075960275312640') { 
        if (command.startsWith("!8ball")) {
          let nicknames = ["🎱 yes", "🎱 no", "🎱 yes r u that dumb?", "🎱no, you idiot", "🎱idk why do you ask me?", "🎱too lazy to answer"]
          message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]}`);
      }
      if (command.startsWith("!help")) {
        const embed = new MessageEmbed()
        .setTitle(`**Help**`)
        .setDescription(`Tbh idk what to write here but here are some commands u can use.

**!help** - the command u just used
**!8ball** - answers your questions

**!walk** - make the dummy walk forward in this [game](https://www.roblox.com/games/13923308011/)
**!left** - make the dummy walk left in this [game](https://www.roblox.com/games/13923308011/)
**!right** - make the dummy walk right in this [game](https://www.roblox.com/games/13923308011/)
**!backwards** - make the dummy walk backwards in this [game](https://www.roblox.com/games/13923308011/)
**!talk** - make the dummy talk something u want in this [game](https://www.roblox.com/games/13923308011/)`)
        .setColor("#90EE90");
        message.channel.send(embed)
      }
      if (message.content.startsWith("!left")) {
        const channel = client.channels.cache.get("1232077870432522371");
        const themessage = await channel.messages.fetch('1236313294873296907');
        if (themessage) {
          const wordToRemove = themessage.content.split(' ')[1];
          const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` ${parseInt(wordToRemove) + 2}`);
          themessage.edit(updatedWords);
          const embed = new MessageEmbed()
          .setTitle(`<:Success:1236732463309656096> **Position has updated in-game!**`)
          .setColor("#90EE90");
          message.channel.send(embed)
        }
      }
      if (message.content.startsWith("!right")) {
        const channel = client.channels.cache.get("1232077870432522371");
        const themessage = await channel.messages.fetch('1236313294873296907');
        if (themessage) {
          const wordToRemove = themessage.content.split(' ')[1];
          const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` ${parseInt(wordToRemove) - 2}`);
          themessage.edit(updatedWords);
          const embed = new MessageEmbed()
          .setTitle(`<:Success:1236732463309656096> **Position has updated in-game!**`)
          .setColor("#90EE90");
          message.channel.send(embed)
        }  
      }
      if (message.content.startsWith("!walk")) {
        const channel = client.channels.cache.get("1232077870432522371");
        const themessage = await channel.messages.fetch('1236313294873296907');
        if (themessage) {
          const wordToRemove = themessage.content.split(' ')[3];
          const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` ${parseInt(wordToRemove) + 2}`);
          themessage.edit(updatedWords);
          const embed = new MessageEmbed()
          .setTitle(`<:Success:1236732463309656096> **Position has updated in-game!**`)
          .setColor("#90EE90");
          message.channel.send(embed)
        }
      }
      if (message.content.startsWith("!backwards")) {
        const channel = client.channels.cache.get("1232077870432522371");
        const themessage = await channel.messages.fetch('1236313294873296907');
        if (themessage) {
          const wordToRemove = themessage.content.split(' ')[3];
          const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` ${parseInt(wordToRemove) - 2}`);
          themessage.edit(updatedWords);
          const embed = new MessageEmbed()
          .setTitle(`<:Success:1236732463309656096> **Position has updated in-game!**`)
          .setColor("#90EE90");
          message.channel.send(embed)
        }
      }
      if (message.content.startsWith("!spin")) {
        const channel = client.channels.cache.get("1232077870432522371");
        const themessage = await channel.messages.fetch('1236313294873296907');
        if (themessage) {
          const wordToRemove = themessage.content.split(' ')[5];
          const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` yes5`);
          themessage.edit(updatedWords);
          const embed = new MessageEmbed()
          .setTitle(`<:Success:1236732463309656096> **Animation has updated in-game!**`)
          .setColor("#90EE90");
          message.channel.send(embed)
        }
      }
      if (message.content.startsWith("!stopspin")) {
        const channel = client.channels.cache.get("1232077870432522371");
        const themessage = await channel.messages.fetch('1236313294873296907');
        if (themessage) {
          const wordToRemove = themessage.content.split(' ')[5];
          const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` no5`);
          themessage.edit(updatedWords);
          const embed = new MessageEmbed()
          .setTitle(`**<:Success:1236732463309656096> Animation has updated in-game!**`)
          .setColor("#90EE90");
          message.channel.send(embed)
        }
      }
      if (message.content.startsWith("!eat")) {
        const channel = client.channels.cache.get("1232077870432522371");
        const themessage = await channel.messages.fetch('1236313294873296907');
        if (themessage) {
          const wordToRemove = themessage.content.split(' ')[4];
          const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` yes4`);
          themessage.edit(updatedWords);
          const embed = new MessageEmbed()
          .setTitle(`**<:Success:1236732463309656096> Player action has been updated in-game!**`)
          .setColor("#90EE90");
          message.channel.send(embed)
        }
      }
      if (message.content.startsWith("!attack")) {
        const channel = client.channels.cache.get("1232077870432522371");
        const themessage = await channel.messages.fetch('1236313294873296907');
        if (themessage) {
          const wordToRemove = themessage.content.split(' ')[6];
          const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` yes6`);
          themessage.edit(updatedWords);
          const embed = new MessageEmbed()
          .setTitle(`**<:Success:1236732463309656096> Player action has been updated in-game!**`)
          .setColor("#90EE90");
          message.channel.send(embed)
        }
      }
      if (message.content.startsWith("!reset_data")) {
        if(message.author.id === ("904076782666391583")) {
          const channel = client.channels.cache.get("1232077870432522371");
          const themessage = await channel.messages.fetch('1236313294873296907');
          if (themessage) {
            const wordToRemove1 = themessage.content.split(' ')[1];
            const updatedWords1 = themessage.content.replace(` ${wordToRemove1}`, ` 0`);
            const wordToRemove2 = themessage.content.split(' ')[3];
            const updatedWords2 = themessage.content.replace(` ${wordToRemove2}`, ` 0`);
            themessage.edit(updatedWords1);
            themessage.edit(updatedWords2);
            const embed = new MessageEmbed()
            .setTitle(`**<:Success:1236732463309656096> Player data has been reset in-game!**`)
            .setColor("#90EE90");
            message.channel.send(embed)
          }
        }
      }
      if (message.content.startsWith("!addvalue")) {
        if(message.author.id === ("904076782666391583")) {
          const channel = client.channels.cache.get("1232077870432522371");
          const themessage = await channel.messages.fetch('1236313294873296907');
          if (themessage) {
            themessage.edit(`${themessage.content} yes`);
            const embed = new MessageEmbed()
            .setTitle(`**<:Success:1236732463309656096> A new value has been added to the data.**`)
            .setColor("#90EE90");
            message.channel.send(embed)
          }
        }
      }
      }
      if(command.startsWith(".msg")) {
        if(message.author.id === ("904076782666391583")) {
          message.delete()
          var text = message.content.split(' ').slice(1).join(' ')
          message.channel.send(text)
        }
      }
    }
  }
});

client2.on("clickButton", async (button) => {
  if (button.id === 'refresh') {
    const loadingMsg = await button.message;
    const universeId = button.message.content.split(" ")[0];
    const embed2 = new MessageEmbed()
    embed2.setTitle(`Loading new stats...`)
    embed2.setFooter('Made by: bruinebies')
    loadingMsg.edit(`${universeId}`, { embed: embed2 });
    if (universeId) {
      try {
        const response = await axios.get(`https://script.google.com/macros/s/AKfycbwiEUeqijQHzmgCPE632qEZhTIbhA1jEsdBWVdv0eol2KIQuLtK2ijb53BB3B4Ka1eURw/exec?UniverseId=${universeId}`);
        const stats = response.data.response.response;
        let verified = '.';
        if (stats.data[0].creator.hasVerifiedBadge === 'true') {
          verified = '<:Verified:1241022678022750220>.';
        }
        let time = stats.data[0].updated.split("T")[0];
        const embed = new MessageEmbed()
        embed.setTitle(`${stats.data[0].name}'s game stats!\nCreator: ${stats.data[0].creator.type}, ${stats.data[0].creator.name}${verified}`)
        embed.setDescription(`**Current players:** ${stats.data[0].playing}\n**Current visits:** ${stats.data[0].visits}\n**Favorited Count:** ${stats.data[0].favoritedCount}\n**Avatar Type:** ${stats.data[0].universeAvatarType}\n**Game Price:** ${stats.data[0].price} <:Robux:1241019742131720224>\n**Last updated:** ${time} 🕒`)
        embed.setColor("#90EE90");
        embed.setFooter('Made by: bruinebies')
        loadingMsg.edit(`${universeId}`, { embed: embed });
      } catch (error) {
        const embed = new MessageEmbed()
        embed.setTitle(`An error has occured!`)
        embed.setDescription(`Error while getting data, check if the game id is correct.\nDo **not** use the place id!`)
        embed.setColor("#750000");
        embed.setFooter('Made by: bruinebies')
        loadingMsg.edit(`${universeId}`, { embed: embed });
      }
    } else {
      const embed = new MessageEmbed()
        embed.setTitle(`An error has occured!`)
        embed.setDescription(`You need to add the game id to the end of the command!.\nDo **not** use the place id!`)
        embed.setColor("#750000");
      embed.setFooter('Made by: bruinebies')
      loadingMsg.edit(`${universeId}`, { embed: embed });
    }
  }
});

client2.on("message", async (message) => {
  if (message.author.bot) {
  } else {
    const command = message.content.toLowerCase()
    if (command.startsWith(".checkstats")) {
      let row = new disbut.MessageActionRow();
      const universeId = message.content.split(" ")[1];
      if (universeId) {
        try {
          const response = await axios.get(`https://script.google.com/macros/s/AKfycbwiEUeqijQHzmgCPE632qEZhTIbhA1jEsdBWVdv0eol2KIQuLtK2ijb53BB3B4Ka1eURw/exec?UniverseId=${universeId}`);
          const verified = '.'
          const stats = response.data.response.response;
          if (stats.data[0].creator.hasVerifiedBadge === 'false') {
            verified = '<:Verified:1241022678022750220>.';
          }
          let time = stats.data[0].updated.split("T")[0];
          const embed = new MessageEmbed()
          embed.setTitle(`${stats.data[0].name}'s game stats!\nCreator: ${stats.data[0].creator.type}, ${stats.data[0].creator.name}${verified}`)
          embed.setDescription(`**Current players:** ${stats.data[0].playing}\n**Current visits:** ${stats.data[0].visits}\n**Favorited Count:** ${stats.data[0].favoritedCount}\n**Avatar Type:** ${stats.data[0].universeAvatarType}\n**Game Price:** ${stats.data[0].price} <:Robux:1241019742131720224>\n**Last updated:** ${time} 🕒`)
          embed.setColor("#90EE90");
          embed.setFooter('Made by: bruinebies');
          
          let buttonRefresh = new disbut.MessageButton()
            .setLabel('Refresh Stats')
            .setStyle('green')
            .setID('refresh');
          
          let buttonGameLink = new disbut.MessageButton()
            .setLabel('Game Link')
            .setStyle('url')
            .setURL(`https://www.roblox.com/games/${stats.data[0].rootPlaceId}`);
          row.addComponent(buttonRefresh);
          row.addComponent(buttonGameLink);
          
          message.channel.send(`${universeId}`, { embed: embed, components: [row] })
        } catch (error) {
          const embed = new MessageEmbed()
          .setTitle(`An error has occured!`)
          .setDescription(`Error while getting data, check if the game id is correct.\nDo **not** use the place id!`)
          embed.setFooter('Made by: bruinebies');
          embed.setColor("#750000");
          message.channel.send(embed);
        }
      } else {
        const embed = new MessageEmbed()
        .setTitle(`An error has occured!`)
        .setDescription(`You need to add the game id to the end of the command!.\nDo **not** use the place id!`)
        .setColor("#750000");
        embed.setFooter('Made by: bruinebies');
        message.channel.send(embed)
      }
    }
  }
});

client3.on("message", async (message) => {
  if (message.author.bot) {
  } else {
    const command = message.content.toLowerCase()
    if (command.match(/https?:\/\/\S+/) && !command.match("https://tenor.com/view/")) {
      if (message.guild.id === '1115963224462999613') {
        if (message.channelId === "1182414660855672953" || message.channelId === "1182059785768677478") {
        } else {
          if (message.member.roles.cache.some(role => role.id === allowedRole) || (message.member.roles.cache.some(role => role.id === owner)) || (message.member.roles.cache.some(role => role.id === imagepermsRuined))) {
          } else {
            message.delete();
            message.channel.send(
            `You can not send links here buddy. <@${message.author.id}>`
            );
          }
        }
      }
    }
    if (command.match("discord.gg")) {
      if (message.channelId === "1182414660855672953") {
      } else {
        message.delete();
        message.channel.send(
          `You can not send invites here buddy. <@${message.author.id}>`
        );
      }
    }
    if (command.match("cunt")) {
      message.delete();
      message.channel.send(
        `You can not be harassing people here buddy. <@${message.author.id}>`
      );
    }
    if (command.match("faggot")) {
      message.delete();
      message.channel.send(
        `You can not be harassing people here buddy. <@${message.author.id}>`
      );
    }
    if (command.match("nigger") || command.match("nigga")) {
      message.delete();
      message.channel.send(
        `You can not be saying the n word to people here buddy. <@${message.author.id}>`
      );
    }
    if (command.match("faggot")) {
      message.delete();
      message.channel.send(
        `You can not be harassing people here buddy. <@${message.author.id}>`
      );
    }
    if(command.startsWith(".msg")) {
        if(message.author.id === ("904076782666391583")) {
          message.delete()
          var text = message.content.split(' ').slice(1).join(' ')
          message.channel.send(text)
        }
      }
    if(command.startsWith(".ugcping")) {
        if(message.author.id === ("904076782666391583")) {
          message.delete()
          const link =  message.content.split(' ')[1];
          const imagelink = message.content.split(' ')[2];
          if (link && imagelink) {
            const ugcname =  message.content.split('/')[5];
            const embed = new MessageEmbed()
            .setTitle(`**A new ugc has been published!**`)
            .setDescription(`${ugcname} is now on the catalog!`)
            .setURL(link)
            .setImage(imagelink)
            .setColor("#860cc3");
            message.channel.send(`<@&1254080486574264452>` , { embed: embed })
          } else {
            message.channel.send(`You forgot to put the link of the item or image link in the message`)
          }
        }
      }
  }
})

client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (newMessage.author.bot) return;
  const channel = client.channels.cache.get("1225151478839119902"); 
  if (channel) {
    if (oldMessage.guild.id === '1115963224462999613') {
      const embed = new MessageEmbed()
      .setTitle(`${oldMessage.author.username}'s messages is edited`)
      .setDescription(`**Old message content:** ${oldMessage.content}
      **New message content:** ${newMessage.content}`)
      .setColor("#FFBF00");
      channel.send(embed);
    }
  }
});

client.on("messageDelete", async (deletedMessage) => {
  if (deletedMessage.author.bot) {
  } else {
    if (deletedMessage.guild.id === '1115963224462999613') {
      let channel = client.channels.cache.get("1225151427513679872");
      const embed = new MessageEmbed()
      .setTitle(`${deletedMessage.author.username}'s messages is deleted`)
      .setDescription(`**Message content:** ${deletedMessage.content}`)
      .setColor("#ff0000");
      channel.send(embed);
    }
  }
});

client3.login(process.env.token3);
client2.login(process.env.token2);
client.login(process.env.token);
