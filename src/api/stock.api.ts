import api from "../axios/axios";


export const getStocks = async () => {
    const response = await api.get('/stocks');
    return response.data.data;
}