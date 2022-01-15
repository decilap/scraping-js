const request = require("request-promise");
const cherrio = require("cheerio");
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document; 
var $ = jQuery = require('jquery')(window);
//https://www.momox-shop.fr/films-C09/
request("https://www.momox-shop.fr/films-C09/", (error, response, html) => {
        if(!error && response.statusCode==200){
            const $ = cherrio.load(html);
            let movies = [];
            $('.mx-product-list-item').each((i, el) => {
                let obj = {};
                obj['image']  = $(el).find('.mx-product-image-wrapper img').attr('src');
                obj['title']  = $(el).find('.mx-product-list-item-title a').text().replace(/\n\s+/g, '');
                obj['price']  = parseFloat($(el).find('.mx-product-list-item-price').text().replace(',','.').replace(' €', ''));
                obj['author'] = $(el).find('.mx-product-list-item-manufacturer a').text().replace(/\n\s+/g, '');
                movies.push(obj);
            })
            console.log(movies);
        }
});