import axios from "axios";

const apiMercadoPago = async (data: any, config: any) => {
    try {
        const response = await axios.post('https://api.mercadopago.com/checkout/preferences', data, config);
        return response.data;
    } catch (error) {
        console.error('Erro na chamada da API do Mercado Pago:', error);
        throw error;
    }
};


export default apiMercadoPago; 
