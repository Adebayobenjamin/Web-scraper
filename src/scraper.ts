import cheerio from 'cheerio';
import request from 'request';
import fs, {createWriteStream} from 'fs';


export class Scraper {
    url: string;

    constructor(url: string, ){
        this.url = url;
        
        
    }

    getHTML(){

        if(this.url == null) return console.log("invalid url");

        request(this.url, (err, response, html) => {

            if (err) return console.log(err);

            console.log(html)
        })
        

        
    }

     scrape( attribute: string, childerenElement: string){
       
        if(this.url == null) return console.log("invalid url");

        const writeStream =  createWriteStream(`scraper.csv`);

        //  Write headers
        writeStream.write(`S/N,Attribute, Value \n`)


         request(this.url, (err, response, html) => {

            if (err) return console.log(err);

            const $ = cheerio.load(html);

            const text = $(attribute);

            const children = childerenElement.split(",");

            for (let x = 0; x < children.length; x++) {
                const child = children[x];
                let result = ""
                
                text.each((i, el) => {

                    const data = $(el).find(child).text().replace(/\s\s+/g, ' ');

                    result += `${data.replace(/\s\s+/g, ' ')} \n`
                
                   
                })

                console.log(result.replace(/\s\s+/g, ' '));

                 //  Write to Row
                 writeStream.write(`${x + 1}, ${child}, ${result.replace(/\s\s+/g, ' ')} \n`);
    
            }

            console.log("Scrapping Done ....");

        })

       
            
     }

    
    
}