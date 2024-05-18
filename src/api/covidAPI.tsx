import { baseURL } from "./base/baseURL"

export const apiHistory =  async () => {
    const response = await baseURL.get(`historical/all?lastdays=all`);
    return response.data;
}


export const apiWorldwide =  async () => {
    const response = await baseURL.get(`all`);
    return response.data;
}
