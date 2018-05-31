var Discord = require('discord.io');
var auth = require('./auth.json');

var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});


function countdown_func (i, channelID)
{ 
            bot.sendMessage({
              to: channelID,
              message: "T minus " + i
            })
}
var rps_array = ["rock", "paper", "scissors"];
var getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var rps = function(userInput, computerInput) {
  if (userInput == computerInput){
    return "tie";
}
  else if (userInput == 0) {
   if (computerInput == 1) {
     return "lose";
    } else {
      return "win";
    }
} else if (userInput == 1) {
if (computerInput == 0) {
  return "win";
} else {
  return "lose";
}
}
else {
  if(computerInput == 0) {
    return "lose";
  } else {
    return "win";
  }
}
}

bot.on('ready', function (evt) {
    console.log('Connected');
    console.log('Logged in as: ');
    console.log(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with !
    if (message.substring(0,1)== '!') {
      var command = message.substring(1);
      console.log(command)
      switch (command)
     {
      case "ping":
        bot.sendMessage({
        	to: channelID,
        	message: "pong"
        });
        break;
        
      case "rock":
        result = getRandomInt(3);
        bot.sendMessage({
        	to: channelID,
        	message: rps_array[result] + ", " + rps(0, result)
        });
        break;
      case "paper":
        result = getRandomInt(3);
        bot.sendMessage({
        	to: channelID,
        	message: rps_array[result] + ", " + rps(1, result)
        });
        break;
      
      case "scissors":
      rsult = getRandomInt(3);
        bot.sendMessage({
        	to: channelID,
        	message: rps_array[result] + ", " + rps(2, result)
        });
        break;
      case "countdown1":
        for(var i = 3; i >= 0; i--) {
         
           setTimeout(countdown_func, 500*(3-i),i,channelID); 
        }

        setTimeout(function(){
            bot.sendMessage({
              to: channelID,
              message: "hallo"
            })
        }, 2000);
      
      break;
  } 
  }
})