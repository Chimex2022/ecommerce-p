// src/api/dummyJsonApi.js
import axios from 'axios';

export const fetchProductsByCategory = async (categoryName) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/category/${categoryName}`);
    return response.data.products;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};
