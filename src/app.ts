import { Scraper } from "./scraper";

const scraper = new Scraper("https://the-age.co");

// scraper.getHTML()

scraper.scrape("div", "a, p, span")