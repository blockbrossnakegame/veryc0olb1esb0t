let Discord = require("discord.js");
let client = new Discord.Client();
let client2 = new Discord.Client();
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

app.get("/", (req, res) => {
  res.send(`bies-bot`);
})

app.get("/2", (req, res) => {
  res.send(`bies-bot`);
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

app.get("/beepblock", (req, res) => {
  const channel = client.channels.cache.get("1239185184566284339"); 
  if (channel) {
    var cool = req.param("cool");
    const embed = new MessageEmbed()
    channel.send(`${cool} heeft een kick barrier aan geraakt. ik zou ff checken of hij hackt of niet\ndoe **/ban ${cool}** als hij hackt`);
    res.send(`hello :D`);
  }
})

app.get("/beepblock2", (req, res) => {
  const channel = client.channels.cache.get("1239185184566284339"); 
  if (channel) {
    var cool = req.param("cool");
    const embed = new MessageEmbed()
    channel.send(`${cool} heeft godmode.\ndoe **/ban ${cool}**`);
    res.send(`hello :D`);
  }
})


app.get("/ruineddevelopment", (req, res) => {
  var effectname = req.param("effectname");
  let channel = client.channels.cache.get("1210262876288319559");
  const embed = new MessageEmbed()
  const theguild = client.guilds.cache.get('1215024343051010069');
  const member = theguild.members.cache.find(member => member.user.username === effectname);
  if (member) {
    if (member.roles.cache.has('1217504460893589624')) {
      res.send(`hello 1`);
    } else {
      member.roles.add('1217504460893589624');
      res.send(`hello`);
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
    if (command.match("nigger") || command.match("nigga")) {
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
    if (command.match("is zero a femboy")) {
      message.channel.send(
        `Yes, yes zero is.`
      );
      message.react('👍')
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
      if (command.startsWith("!8ball")) {
        if (command.match("is bruinebies a femboy") || command.match("is bruinebies femboy")) {
          let nicknames = ["🎱no", "🎱no, you idiot", "🎱too lazy to answer"]
          message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]}`);
        } else if (command.match("is zero a femboy") || command.match("is zero femboy")) {
          let nicknames = ["🎱 yes", "🎱 yes r u that dumb?", "🎱too lazy to answer"]
          message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]}`);
        } else {
          let nicknames = ["🎱 yes", "🎱 no", "🎱 yes r u that dumb?", "🎱no, you idiot", "🎱idk why do you ask me?", "🎱too lazy to answer"]
          message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]}`);
        }
      }
      if (command.startsWith("!help")) {
        const embed = new MessageEmbed()
        .setTitle(`**Help**`)
        .setDescription(`Tbh idk what to write here but here are some commands u can use.

**!help** - the command u just used
**!8ball** - answers your questions`)
        .setColor("#90EE90");
        message.channel.send(embed)
      }
      if (message.content.startsWith("!left")) {
        const channel = client.channels.cache.get("1232077870432522371");
        const themessage = await channel.messages.fetch('1236313294873296907');
        if (themessage) {
          const wordToRemove = themessage.content.split(' ')[1];
          const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` ${parseInt(wordToRemove) + 1}`);
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
          const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` ${parseInt(wordToRemove) - 1}`);
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
          const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` ${parseInt(wordToRemove) + 1}`);
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
          const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` ${parseInt(wordToRemove) - 1}`);
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
          const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` yes`);
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
          const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` no`);
          themessage.edit(updatedWords);
          const embed = new MessageEmbed()
          .setTitle(`**<:Success:1236732463309656096> Animation has updated in-game!**`)
          .setColor("#90EE90");
          message.channel.send(embed)
        }
      }
      if(command.startsWith("!talk")) {
        if(message.member.roles.cache.some(role => role.id === 1238443072241537066) || message.author.id === ("904076782666391583") || message.author.id === ("1017921613913657364")  || message.author.id === ("881275610180251688") ) {
        const channel = client.channels.cache.get("1232077870432522371");
        const themessage = await channel.messages.fetch('1236313294873296907');
        const wordToRemove = themessage.content.split(' ')[4];
        const wordtoadd = message.content.split(' ')[1];
        if (wordtoadd.toLowerCase().match("discord.gg") || wordtoadd.toLowerCase().match("bitch") || wordtoadd.toLowerCase().match("daddy") || wordtoadd.toLowerCase().match("harder") || wordtoadd.toLowerCase().match("porn") || wordtoadd.toLowerCase().match("fuck") || wordtoadd.toLowerCase().match("nigger") || wordtoadd.toLowerCase().match("cunt") || wordtoadd.toLowerCase().match("faggot") || wordtoadd.toLowerCase().match("gay") || wordtoadd.toLowerCase().match("sex")) {
          const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` #####`);
          themessage.edit(updatedWords);
          const embed = new MessageEmbed()
          .setTitle(`<:NoSuccess:1236732681828434051> **Chat message is censored!**`)
          .setColor("#750000");
          message.channel.send(embed)
        } else {
          const updatedWords = themessage.content.replace(` ${wordToRemove}`, ` ${wordtoadd}`);
          themessage.edit(updatedWords);
          const embed = new MessageEmbed()
          .setTitle(`<:Success:1236732463309656096> **Chat message has been updated in-game!**`)
          .setColor("#90EE90");
          message.channel.send(embed)
        }
      } else {
        const embed = new MessageEmbed()
        .setTitle(`<:NoSuccess:1236732681828434051> **Command currently for bruinebies and people he gave perms only!**`)
        .setColor("#750000");
        message.channel.send(embed)
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
          embed.setDescription(`**Current players:** ${stats.data[0].playing}\n**Current visits:** ${stats.data[0].visits}\n**Favorited Count:** ${stats.data[0].favoritedCount}\n**Avatar Type:** ${stats.data[0].universeAvatarType}\n**Game Price:** ${stats.data[0].price} <:Robux:1241019742131720224>\n**Last updated:** ${time} 🕒\n\n[**Game Link**](https://www.roblox.com/games/${stats.data[0].rootPlaceId})`)
          embed.setColor("#90EE90");
          loadingMsg.edit(embed)
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
      let button = new disbut.MessageButton()
      button.setLabel('Refresh Stats')
      button.setStyle('green');
      button.setID('refresh')
      const embed2 = new MessageEmbed()
      embed2.setTitle(`Loading...`)
      embed2.setFooter('Made by: bruinebies')
      const universeId = message.content.split(" ")[1];
      const loadingMsg = await message.channel.send(`${universeId}`, { embed: embed2, components: [new disbut.MessageActionRow().addComponent(button)] });
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
          embed.setDescription(`**Current players:** ${stats.data[0].playing}\n**Current visits:** ${stats.data[0].visits}\n**Favorited Count:** ${stats.data[0].favoritedCount}\n**Avatar Type:** ${stats.data[0].universeAvatarType}\n**Game Price:** ${stats.data[0].price} <:Robux:1241019742131720224>\n**Last updated:** ${time} 🕒\n\n[**Game Link**](https://www.roblox.com/games/${stats.data[0].rootPlaceId})`)
          embed.setColor("#90EE90");
          loadingMsg.edit(embed)
        } catch (error) {
          const embed = new MessageEmbed()
          .setTitle(`An error has occured!`)
          .setDescription(`Error while getting data, check if the game id is correct.\nDo **not** use the place id!`)
          embed.setFooter('Made by: bruinebies');
          embed.setColor("#750000");
          loadingMsg.edit(`${universeId}`, { embed: embed2, components: [new disbut.MessageActionRow().addComponent(button)] })
        }
      } else {
        const embed = new MessageEmbed()
        .setTitle(`An error has occured!`)
        .setDescription(`You need to add the game id to the end of the command!.\nDo **not** use the place id!`)
        .setColor("#750000");
        embed.setFooter('Made by: bruinebies');
        loadingMsg.edit(embed)
      }
    }
  }
});

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

client2.login(process.env.token2);
client.login(process.env.token);
