import {API_KEY} from './env.js';
const api_key = API_KEY;

export async function getNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${api_key}`)
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        const articlesArr = data.articles;
        return articlesArr;
    } catch (err) {
        console.log({'fetch error' : err.message})
    }
}
