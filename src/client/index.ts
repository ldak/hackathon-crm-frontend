import axios, {AxiosInstance} from "axios";

<<<<<<< Updated upstream
=======
// export const baseUrl :string = 'http://localhost:8000/'
>>>>>>> Stashed changes
export const baseUrl :string = 'https://api.appointmate.me/'

const httpClient :AxiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        // 'Content-Type': 'application/json'
    }
});

export default httpClient;