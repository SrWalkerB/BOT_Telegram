const Bot = require("./Bot/Bot")
const BotControllers = require("./Bot/Controllers/BotControllers");


console.log("Bot rodando")


BotControllers.menu_command();
BotControllers.banido_command();
BotControllers.dialog();
BotControllers.dolar();
BotControllers.news();
BotControllers.news_world();



process.once('SIGINT', () => Bot.stop('SIGINT'))
process.once('SIGTERM', () => Bot.stop('SIGTERM'))