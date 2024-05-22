import { baseURL } from './base/baseURL';

export const apiHistory = async () => {
    const response = await baseURL.get(`historical/all?lastdays=all`);
    return response.data;
};

export const apiWorldwide = async () => {
    const response = await baseURL.get(`all`);
    return response.data;
};

export const apiCountries = async () => {
    const response = await baseURL.get(`countries`);
    return response.data;
};


export const apiCountriesByDetails = async (country: string) => {
    const response = await baseURL.get(`countries/${country}`);
    return response.data;
};