import axios from 'axios';

const fetchProduct = async () => axios.get('/api/products');

export { fetchProduct };
