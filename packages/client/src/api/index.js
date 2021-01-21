import axios from 'axios';

const { API_URL } = process.env;

// API to get hero slider
export const getHeroSlider = () => {
  return axios.get(`${API_URL}/hero-sliders`);
};

// API to get hero slider
export const getChooseUs = () => {
  return axios.get(`${API_URL}/why-choose-uses`);
};
