const request = require("request")

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiaGFpZGVyLWFsaTEiLCJhIjoiY2s0ODlpNGE1MDVqdDNvcG9mYWJiZ21idyJ9.JaBcHwYFk5yRQ-njaEF1rw`
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect location services!')
        } else if (!response.body.features.length) {
            callback('Invalid Search! Try Again')
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode


