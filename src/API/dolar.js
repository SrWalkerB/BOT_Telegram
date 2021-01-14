const { default: axios } = require("axios");


const dolarResult = axios.get("https://economia.awesomeapi.com.br/json/USD-BRL").then(resp => {

    return resp.data[0];
})


module.exports = dolarResult;