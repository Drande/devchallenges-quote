import type { IPage } from "@/models/pagination";
import type { QuoteModel } from "@/models/quote";

export async function getRandomQuote(): Promise<QuoteModel> {
    return new Promise((resolve, reject) => {
        fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
        .then(response => response.json())
        .then(data => {
            resolve(data.data[0]);
        });
    }) 
}

export async function getQuotesByAuthor(author: string, page: number = 1): Promise<IPage<QuoteModel>> {
    return new Promise((resolve, reject) => {
        fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}&page=${page}`)
        .then(response => response.json())
        .then(data => {
            resolve(data);
        });
    }) 
}