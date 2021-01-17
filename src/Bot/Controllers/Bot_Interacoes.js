

const menu_command = {

    run(Bot) {

        Bot.command("menu", (ctx) => ctx.reply(`*Bot Commads* \n
        1- /dolar \n 
        2- /news_pc  \n
        3- /news \n
        4- /dialogo \n
        5- /ban`))

    }

}

const dialog = {

    run(Bot) {

        Bot.command("/dialogo", (ctx) => ctx.reply(`-> /Oi, 
        \n-> /bot, 
        \n-> /beleza ,
        \n-> /naruto ,
        \n -> /vlw
        `))
    
        Bot.command("/oi", (ctx) => ctx.reply("Oi") && ctx.replyWithPhoto("https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fnaruto%2Fimages%2Fb%2Fb1%2FNaruto_Uzumaki_%2528Infobox_Parte_II_B%2529.png%2Frevision%2Flatest%3Fcb%3D20160903113328%26path-prefix%3Dpt-br&imgrefurl=https%3A%2F%2Fnaruto.fandom.com%2Fpt-br%2Fwiki%2FNaruto_Uzumaki&tbnid=dLFZTR_cpV-WfM&vet=12ahUKEwjE3_bpwZnuAhXeMLkGHRlsBesQMygAegUIARCqAQ..i&docid=JKhitMXjlb4XQM&w=1440&h=1080&q=naruto&client=opera-gx&ved=2ahUKEwjE3_bpwZnuAhXeMLkGHRlsBesQMygAegUIARCqAQ"))
        Bot.command("/bot", (ctx) => ctx.reply(`Sou Eu`))
    
        
        Bot.command("/naruto", (ctx) => ctx.reply('Serei Hokage datebayoo') && 
        ctx.replyWithPhoto("https://i1.wp.com/www.alternativanerd.com.br/wp-content/uploads/2019/10/AN_Naruto.jpeg"))
    
        Bot.command("/beleza", (ctx) => ctx.replyWithPhoto("https://sm.ign.com/t/ign_br/screenshot/default/narutinho_rq9u.1280.jpg"))
    
        Bot.command("/vlw", (ctx) => ctx.replyWithPhoto("https://media.istockphoto.com/vectors/handshake-emoticons-vector-id134102861"))
    }

}

const banido_command = {
    
    run(Bot) {

        Bot.command("ban", (ctx) => ctx.reply("Banido"))
    }
}



function Interacoes(Bot) {
    
    menu_command.run(Bot);
    dialog.run(Bot);
    banido_command.run(Bot);
    
}



module.exports = { Interacoes };