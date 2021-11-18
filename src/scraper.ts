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
        writeStream.write(`S/N,${childerenElement} \n`)


         request(this.url, (err, response, html) => {

            if (err) return console.log(err);

            const $ = cheerio.load(html);

            const text = $(attribute);

            const children = childerenElement.split(",");

          
                var  x = 1;
                text.each((i, el) => {
                   var data = ""
                    children.forEach(child => {

                        const result = $(el).find(child).text().replace(/\s\s+/g, ' ').replace(',', '');

                        data += `${result.replace(/\s\s+/g, ' ').replace(',', '')},`

                    })

                    console.log(data.substring(0, data.length - 1))
                    //  Write to Row
                   writeStream.write(`${x}, ${data.substring(0, data.length - 1)} \n`);
                   x++;

                   
                })

                

                
    
            
           

            console.log("Scrapping Done ....");

        })

       
            
     }

    
    
}