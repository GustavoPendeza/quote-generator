import axios from "axios";

export const api = axios.create({
    baseURL: "https://quote-garden.onrender.com/api/v3/quotes",
});
