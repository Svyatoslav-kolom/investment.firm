import axios from 'axios';

export const getAll = async () => {
  try {
    const response = await axios.get('https://web.fundlumina.com/api/services');
    console.log('✅ Все данные:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Ошибка при получении всех данных:', error);
    return [];
  }
};
