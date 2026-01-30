import api from "../axios/axios";

export const getProducts = async () => {
    const response = await api.get('/products');
    return response.data.data;
}

export const deleteProduct = async (id : number) => {
    const response = await api.delete('/products/' + id);
    return response.data;
}