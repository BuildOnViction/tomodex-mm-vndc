const axios = require('axios')
const config = require('config')

const gPrice = {}
const gUSDPrice = {}

const httpClient = axios.create()
httpClient.defaults.timeout = 2500

const getLatestPrice = async (p = false) => {
    try {

        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=tomochain&vs_currencies=usd`)
        gPrice[p] = 1 / ( response.data['tomochain'].usd * 23300 )

    } catch (err) {
        console.log(err)
    }
    return gPrice[p]
}

const getUSDPrice = async (p = false) => {
    let baseSymbol = 'VNDC'
    try {
        if (p && (config[p] || {}).price) {
            return config[p].price
        }

        let arr = p.split('-')
        baseSymbol = arr[0].toUpperCase()

        gUSDPrice[baseSymbol] = 1 / 23300

    } catch (err) {
        console.log(err)
    }
    return gUSDPrice[baseSymbol]
}

module.exports = { getLatestPrice, getUSDPrice }
