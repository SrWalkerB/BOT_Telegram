
require("dotenv").config();

const { Telegraf } = require("telegraf");


const Bot = new Telegraf(process.env.TOKEN)




module.exports = Bot;