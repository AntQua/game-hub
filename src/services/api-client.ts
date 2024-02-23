import axios from "axios";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY as string;

if (!apiKey) {
    throw new Error('API key not found. Please make sure to set REACT_APP_API_KEY environment variable.');
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: apiKey,
    },
});


