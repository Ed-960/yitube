import axios from 'axios';

const Base_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  method: 'GET',
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '4f618068dbmsh016ca202ea35ff7p1f1f4cjsn2fca70a2505e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${Base_URL}/${url}`, options);
  return data;
};
