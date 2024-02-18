import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'58f64ed9f2ea4f6b9879f9750c5078f5',
    },
});