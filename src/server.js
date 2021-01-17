const Bot = require("./Bot/Bot")
const BotControllers = require("./Bot/Controllers/BotControllers");
const Bot_Interacoes = require("./Bot/Controllers/Bot_Interacoes");


console.log("Bot rodando")



Bot_Interacoes.Interacoes(Bot);

BotControllers.Actions();




process.once('SIGINT', () => Bot.stop('SIGINT'))
process.once('SIGTERM', () => Bot.stop('SIGTERM'))



