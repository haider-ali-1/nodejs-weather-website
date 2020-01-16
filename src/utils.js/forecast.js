const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/c9155869663288aa2f502a5c1cb67c30/${latitude},${longitude}?units=si`
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect weather services!')
        } else if (response.body.error) {
            callback('Invalid Search')
        } else {
            callback(undefined, {
                one_day_summary: response.body.daily.data[0].summary,
                current_temp: response.body.currently.temperature,
                rain_probability_percent: response.body.currently.precipProbability
            })
            // callback(undefined, `${response.body.daily.data[0].summary} it is currently ${response.body.currently.temperature} degree out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast