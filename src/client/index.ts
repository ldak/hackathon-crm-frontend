import axios, {AxiosInstance} from "axios";

export const baseUrl :string = 'http://192.168.209.25:8000'

const httpClient :AxiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default httpClient;