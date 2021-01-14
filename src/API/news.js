require('dotenv').config();

const { default: axios } = require("axios");



const newsResult = axios.get(process.env.NEWSAPI).then(resp => {

    return resp.data;
})


module.exports = newsResult;