require('dotenv').config();

const { default: axios } = require("axios");



const newsResult = axios.get(process.env.NEWSAPI).then(resp => {

    return resp.data;
})


const news_World_Result = axios.get(process.env.NEWS_WORLD_API).then(resp => {

    return resp.data;
})



module.exports = {
    newsResult,
    news_World_Result
};