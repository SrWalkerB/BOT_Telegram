const moment = require("moment")
const dolarResult = require("../../API/dolar")
const { newsResult, news_World_Result } = require("../../API/news")
const Bot = require("../Bot")


Bot.launch() 


const dolar = {

    async run(){

        moment.locale("pt-br")
        const dolar = await dolarResult;
        const data_atualizaca = moment(dolar.create_date).format("lll");
                
        Bot.command("/dolar", (ctx) => ctx.reply(`-> Moeda: ${dolar.code} => ${dolar.codein}
        \n-> Alta do dia: R$ ${dolar.high}
        \n-> Agora: R$ ${dolar.ask}
        \n-> Menor do dia: R$ ${dolar.low}
        \n-> Atualização: ${data_atualizaca}
        `))
    }
}

const news = {

    async run(){

        const news = await newsResult;
    
        let fift_teen_news = [];
    
        for(let x = 0; x < 15; x++){
    
            fift_teen_news.push(news[x])
        }
        
    
        Bot.command("/news_pc", (ctx) => fift_teen_news.map((result, index) => {
    
            ctx.reply(`-> ${result.title} (${result.site}) \n *${result.newsURL}* \n`)
        }));
    }

    

}

const news_world = {
    
    async run(){

        const news = await news_World_Result
        let fif_teen_news = [];
    
        for(let x = 0; x < 9; x++) {
    
            fif_teen_news.push(news[x]);
        }
    
        Bot.command("/news", (ctx) => fif_teen_news.map(result => {
    
            ctx.reply(`-> *${result.title}* (${result.site}) \n ${result.newsURL}`)
    
            
        }))
    }
}




function Actions(){

    dolar.run();
    news.run();
    news_world.run();

}


module.exports = { Actions }

