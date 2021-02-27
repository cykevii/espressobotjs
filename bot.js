const Discord = require('discord.js');

const client = new Discord.Client();
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received, this means your bot will not sleep");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://imaginebot-js.glitch.me/`);
}, 280000);

const config = require("./package.json"); // Contains the prefix, and token!

//i guess it works \-o_o-/ 


client.on('ready', () => {
    
        
        client.user.setPresence({ game: { name: 'Hello there..', type: 0 } });
        client.user.setStatus('online'); // online, idle, dnd, invisible
        client.user.setUsername('☕ Espresso Bot');
});



const serverStats = {
  guildID: '539415874478800906',
  totalUsersID: '539539686159286272',
  memberCountID: '539539817596321792',
  botCountID: '539539915311022082'
}








client.on('guildMemberAdd', member => {
  if (member.guild.id !== serverStats.guildID) return;

  client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
  client.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);
});

client.on('guildMemberRemove', member => {
   if (member.guild.id !== serverStats.guildID) return;

  client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
  client.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'verify');
  if (!channel) return;
  channel.send('Hello ' + member + ' welcome to Imagination! Please use `!verify` to verify that you are a human.');
});

// When started..
client.on('ready', () => {
  
  
  
  
  
  
});

// Event Listener
client.on('message', message => {

    var prefix = "e.";
    var msg = message.content;

    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    let sliceVar = message.content.split(' ').slice(1).join(' ');
  
  
  if(msg.startsWith(prefix + 'about19')) {
    
      var about19Embed = new Discord.RichEmbed();
      about19Embed.addField("Hello users of __Espresso Bot__!\n I am *cykevii#3731* and i would like to\n announce that __Espresso Bot__ will be shut down at the __21st of August 2019__\n Thanks to you all who used this bot and have a good Day/Night!", "To show your support please join this discord server, it helps alot! https://discord.gg/M2V73ju");
    
      message.channel.send(about19Embed);
  }
  
  if (msg.startsWith(prefix + 'avatar')) {
    var first = message.mentions.users.first();
    
    var fembed = new Discord.RichEmbed();
    fembed.setImage(first.avatarURL);
    fembed.setColor('#275BF0');
    
    message.channel.send(fembed);
    
  }

  
  if (msg.startsWith(prefix + 'serverpic')) {
    
    var messagebed = new Discord.RichEmbed();
    messagebed.setDescription('Server picture.');
    messagebed.setImage(client.guilds.avatarURL);
    messagebed.setColor('#275BF0');
    
    message.channel.send(messagebed);
    
  }
    
  
  

if (msg.startsWith(prefix + 'warn')) {
if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("Hey! You don' have access to this command..");
    var firstMention = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
 if (!firstMention) return message.reply('did you mention someone to warn?');
    var joinArgs = args.join(" ").slice(22);
if (!joinArgs) return message.reply('Did you provide a reason to the warning?');

    let kickoChannel = message.guild.channels.find("name", "incidents");

    let warnEmbed = message.author + ' warned ' + firstMention + ' for: ' + joinArgs;


    if (!joinArgs) return message.reply('Did you provide a reason to the warning?');
    firstMention.send('You were warned by ' + message.author + ' for: ' + joinArgs);
    kickoChannel.send(warnEmbed);
}


 if (msg.startsWith(prefix + "countTo")) {
  if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("NO YOU DONT HAVE PERMISSION TO RUN THIS COMMAND >;C");
  var slicor = message.content.split(' ').slice(1).join(' ');

  var countAmount = 0;

  while (countAmount != slicor) {
   message.channel.send(countAmount);
   countAmount++
  }
  if (countAmount == slicor) {
   message.channel.send(slicor);
  }
 }

 if (msg.startsWith(prefix + 'help')) {

    message.channel.send({embed: {
    color: 123456,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "__**Commands**__",
    description: "Here are the commands you can use :)",
    fields: [{
        name: prefix + "pun",
        value: "Generates a random Pun."
      },
      {
        name: prefix + "sans",
        value: "Don't run this command.. it's not a sans gif"
      },
      {
        name: prefix + "baldi",
        value: "also don't run this.. it's not a baldi gif yknow.."
      },
      {
        name: prefix + "lovetest",
        value: "The right usage for this command is: `" + prefix + "lovetest (user)`"
      },
      {
        name: prefix + "kill",
        value: "kill someone hehe.. `" + prefix + "kill (user)`"
      },
      {
       name: prefix + "kiss",
       value: "kiss someone you like <3"
      },
             {
                 name: prefix + "howpro",
                 value: "check how pro someone is ;)"
             }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Imagination bot is still in beta and will be updated every now and then :)"
    }
  }
});

     if (message.member.hasPermission('KICK_MEMBERS')) {
     
        message.channel.send({embed: {
    color: 123456,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "__**Admin Commands**__",
    description: "Mod/Admin Commands!",
    fields: [{
        name: prefix + "ban",
        value: "Ban members. Usage: `" + prefix + "ban (user) (reason)`"
      },
      {
        name: prefix + "kick",
        value: "Kick members. Same usage as ban."
      },
      {
        name: prefix + "warn",
        value: "Warn members. Same usage as ban."
      },
      {
        name: prefix + "say",
        value: "say command. You need `ADMINISTRATOR` permission in order to use this command."
      },
      {
        name: prefix + "countTo",
        value: "This command also requires `MANAGE_SERVER`. With this command you can let the bot count to a certain number."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Dogs can get up to 13 years of age :O"
    }
  }
});

     }
     
 }

  if (msg.startsWith(prefix + 'lovetest')) {
   var slice = message.content.split(' ').slice(1).join(' ');
   if (!slice) return message.reply('Did you choose someone to lovetest?');
   var rNumb = Math.floor(Math.random() * 100);
   if (rNumb == 100) {
    message.channel.send(message.author + ' and ' + slice + ' are **TOTALLY** MEANT FOR EACH OTHER!! <3 (100%)');
    return;
   } else if (rNumb == 0) {
    message.channel.send(message.author + ' and ' + slice + ' are totally **NOT** meant for eachother ;( (0%)');
    return;
   }
   message.channel.send(message.author + ' and ' + slice + ' are ' + rNumb + '% meant for eachother');

  }

  if (msg.startsWith(`${prefix}embed`)) {
   if (!message.member.roles.find('name', 'Owner')) return;

   message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "This is an embed",
    url: "http://google.com",
    description: "This is a test embed to showcase what they look like and what they can do.",
    fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
});
  }

  if (msg.startsWith(`${prefix}kiss`)) {
    var sliced = message.content.split(' ').slice(1).join(' ');
    var firstus = message.mentions.users.first();
     if (!sliced) return message.channel.send('Choose someone to kiss, ' + message.author);
    
    var kissList = ['https://data.whicdn.com/images/53751778/original.gif',
                    'https://pa1.narvii.com/5870/d0740ac6cd5006f9098cd13866093a8ba609863c_hq.gif',
                    'https://media0.giphy.com/media/zkppEMFvRX5FC/giphy.gif'];
    
    var kissRand = kissList[Math.floor(Math.random() * kissList.length)];
    
     var qemb = new Discord.RichEmbed();
     qemb.setColor('#275BF0');
     qemb.setTitle('❤ **' + firstus.tag + '** you were kissed by **' + message.author.tag + '** ❤');
     qemb.setImage(kissRand);
    
    if (firstus == message.author) {
    message.channel.send('Oof, that lonely? ;-;');
      return;
    }
    
    message.channel.send(qemb);
    
  }

  if (message.content.startsWith(prefix + 'kill')) {
   var ment = message.mentions.users.first();
   if (message.author == ment) {
   message.reply('you killed yourself.');
    return;
   }
   message.channel.send(ment + ' was killed by ' + message.author);
  }

  if (message.content.startsWith(`${prefix}baldi`)) {

       message.channel.send('https://tenor.com/view/baldi-fortnite-fortnite-dance-gif-12747343');

       }

    if (message.content.startsWith(`${prefix}sans`)) {

  message.channel.send('https://tenor.com/view/sans-undertale-dance-gif-12730380');

}

 if (message.content.startsWith(`${prefix}say`)) {
    
   
    if (!message.member.hasPermission('ADMINISTRATOR')) {
        message.channel.send('Nono, dont try to run commands you dont have perms to :)');
        return;
      }

    var text = message.content.split(' ').slice(1).join(' ');
    message.channel.send(text);
    message.delete();
  }

 if (msg.startsWith(`${prefix}purge`)) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        async function purge() {
            message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            if (!message.member.hasPermission("MANAGE_MESSAGES")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                message.channel.send('Ehhh, no.'); // This tells the user in chat that they need the role.
                return; // this returns the code, so the rest doesn't run.
            }

            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.
            // this embeds to the incidents channel which user deleted how many messages
          var purgeEmbed = message.author + ' **deleted** ' + fetched.size + ' **messages in **' + message.channel;
        let incidentchannel = message.guild.channels.find("name", "incidents");
         incidentchannel.send(purgeEmbed);

        }

        // We want to make sure we call the function whenever the purge command is run.
        purge(); // Make sure this is inside the if(msg.startsWith)

    }

     if (message.content.startsWith(`${prefix}howpro`)) {
      // Variables
      let randomNum = Math.floor(Math.random() * 100);
      let mentionedU = message.guild.member(message.mentions.users.first());
      if(!mentionedU) return message.channel.send("Can't find user!");

      message.channel.send(mentionedU + ' is ' + randomNum + '% **Pro**');
     }


      if (message.content.startsWith(`${prefix}kick`)) {
       let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    var kickEmbed = kUser + " **was kicked by: " + message.author + " for:** " + kReason;

    let kickChannel = message.guild.channels.find("name", "incidents");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");
    if (!kReason) return message.reply('Provide a reason too!');
    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }


 if (message.content.startsWith(`${prefix}ban`)) {

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");

    let banEmbed = bUser + " **was banned by** " + message.author + " **for:** " + bReason;

    let incidentchannel = message.guild.channels.find("name", "incidents");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
    if (!bReason) return message.reply('Provide a reason too!');

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;


 }


     if (msg.startsWith(`${prefix}pun`)) {
      var punList = ["Did you hear about the guy whose whole left side was cut off? \n He’s all right now.",
                     "How many tickles does it take to make an octopus laugh? \n 10-tickles.",
                     "How does Moses make coffee? \n Hebrews it.",
                     "How do turtles communicate with each other? \n With shell phones.",
                     "I've done a ton today.. \n A skele-ton!", "How do you invite a dinosaur for lunch? \n Tea, Rex?",
                     "There was a kidnapping at school yesterday. \n Don’t worry, though—he woke up.",
                     "What did the mermaid wear to math class? \n An algae-bra.",
                    "I’m positive I just lost an electron. \n Better keep an ion that.",
                     "I tried to sue the airline for losing my luggage. \n I lost my case."];
      var rand = punList[Math.floor(Math.random() * punList.length)];

      message.channel.send(rand);

    }
    
    if (msg.startsWith(prefix + 'aping')) {
    
        message.member.addRole('551390407922155531');
        message.reply('you will now receive pings when something is getting announced!');
    }
        
  
  if (msg.startsWith(prefix + 'csay')) {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('did someone take your perms? or is it just you not understanding you need ADMINISTARTOR permission?');
  
    var mesga = message.content.split(' ').slice(1).join(' ');
    
    
    client.channels.get('539415874478800908').send(mesga);
    
  }
  
  if (msg.startsWith(prefix + 'qotd')) {
    var sliceThingy = message.content.split(' ').slice(1).join(' ');
    var qotd = new Discord.RichEmbed();
    qotd.setTitle('**Question of The Day!**');
    qotd.setDescription(sliceThingy);
    qotd.setFooter('New Questions every day!');
    qotd.setTimestamp();
    qotd.setColor('#FF0000');
    
    let omegalul = client.channels.find('574541342567301120');
    omegalul.send(qotd);
  }
  
});

// :)




// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret