const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
} = require('next/constants')

const DEV_BASE_URL = 'http://localhost:3625'
const PROD_BASE_URL = 'https://passwall-api.herokuapp.com'


module.exports = function (phase, {defaultConfig}) {
    console.log(phase)
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'

    const env = {
        BASE_URL: (function() {
            if (isDev) return DEV_BASE_URL
            if (isProd) return PROD_BASE_URL
        })()
    }
    
    return {
        env
    }
}