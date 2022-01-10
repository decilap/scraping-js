const request = require("request-promise");
const cherrio = require("cheerio");

request("https://www.sales-hacking.com/post/legal-web-scraping", (error, response, html) => {
        if(!error && response.statusCode==200){
            const $ = cherrio.load(html);

            console.log($.html())
        }
});