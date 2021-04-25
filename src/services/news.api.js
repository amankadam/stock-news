import axios from 'axios';
import { NEWS_API_ENDPOINT } from '../common/constants';

export const getStockNews = ({ stockName } )=> {
    console.log(process.env.VUE_APP_X_RAPID_API_KEY,NEWS_API_ENDPOINT);
    return axios.get(NEWS_API_ENDPOINT,{
        params:{
            "q": stockName +  ' stock',
            "lang": "en",
            "sort_by": "relevancy",
            "page": "1",
            "media": "True",
            "country":"IN"
        },
        headers:{
            "x-rapidapi-key": process.env.VUE_APP_X_RAPID_API_KEY,
            "x-rapidapi-host": "newscatcher.p.rapidapi.com",
            "useQueryString": true
        }
    });
}