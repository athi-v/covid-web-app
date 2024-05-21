import axios from 'axios';

const covidBaseURL = 'https://disease.sh/v3/covid-19/';

export const baseURL = axios.create({
    baseURL: covidBaseURL,
});
