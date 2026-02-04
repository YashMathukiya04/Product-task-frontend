import api from "../axios/axios";

export const getStocks = async () => {
    const response = await api.get('/stocks');
    return response.data.data;
}

export const addStock = async (stock: {
  product_id: number;
  batch_number: string;
  quantity: number;
  expiry_date: string;
}) => {
    const response = await api.post('/stocks', stock);
    return response.data;
}

export const getStockEntries = async() => {
  const response = await api.get('/stocks/entries/');
  return response.data.data;
}