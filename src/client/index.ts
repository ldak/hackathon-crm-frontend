import axios, {AxiosInstance} from "axios";

export const baseUrl :string = 'https://localhost:8080'

const httpClient :AxiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default httpClient;