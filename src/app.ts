import { Scraper } from "./scraper";

const scraper = new Scraper("https://www.jumia.com.ng/computing/");

// scraper.getHTML()

scraper.scrape(".itm", ".name, .prc, .dsct")