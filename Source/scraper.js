const request = require('request');

var scrapeProxies = new Promise((resolve, reject) => {
    request({
        method: "GET",
        url: " https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=2500&country=all&ssl=all&anonymity=all&simplified=true",
    }, (error, response, body) => {
        if (body) {
            return resolve(body.split("\n"));
        } else {
            return reject();
        }
    });
});

module.exports = { scrapeProxies };
