import api from "../axios/axios";

export const getProducts = async () => {
    const response = await api.get('/products');
    return response.data.data;
}

export const deleteProductbyId = async (id : number) => {
    const response = await api.delete('/products/' + id);
    return response.data;
}

export const addProduct = async (product: {
  name: string;
  total_quantity: number;
}) => {
    const response = await api.post('/products', product);
    return response.data;
}

export const updateProductById = async (id : number, product: {
  name: string;
  total_quantity: number;
}) => {
    const response = await api.patch('/products/' + id, product);
    return response.data;
}
