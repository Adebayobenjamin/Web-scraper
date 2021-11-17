import cheerio from 'cheerio';
import request from 'request';
import fs, {createWriteStream} from 'fs';
import readline, {createInterface} from "readline";
import { stdin, stdout } from 'process';

const rl = createInterface(stdin, stdout);


// request("https://www.hugsandeyes.com", ((err, response, html) => {

// if(err) {
//     console.log(err);
//     return;
// }

// const $ = cheerio.load(html);

const url = rl.question('input url ', (url: string) => {

    rl.question('what attribute are you targeting e.g class, id, tag', (attr: string) => {

        rl.question(`enter ${attr} value`, (value: string) => {
            console.log(url, attr, value)
        })
       
    })
})



// const div = $('.col-lg-4').text();

// // createWriteStream('data.csv')

// }));