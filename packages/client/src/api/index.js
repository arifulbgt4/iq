import axios from 'axios';

const { API_URL } = process.env;

// API to get hero slider
export const getHeroSlider = () => {
  return axios.get(`${API_URL}/hero-sliders`);
};

// API to get why-choose-us
export const getChooseUs = () => {
  return axios.get(`${API_URL}/why-choose-uses`);
};

// API to get why-choose-us header
export const getChooseUsHeader = () => {
  return axios.get(`${API_URL}/choose-us-header`);
};

// API to get about-us
export const getAboutUs = () => {
  return axios.get(`${API_URL}/about-us`);
};

// API to get blogs
export const getBlogs = () => {
  return axios.get(`${API_URL}/blogs`);
};

// API to get blogs header
export const getBlogsHeader = () => {
  return axios.get(`${API_URL}/blog-header`);
};

// API to get founder
export const getFounder = () => {
  return axios.get(`${API_URL}/founder`);
};

// API to get guids
export const getGuids = () => {
  return axios.get(`${API_URL}/guids`);
};

// API to get guids header
export const getGuidsHeader = () => {
  return axios.get(`${API_URL}/guid-header`);
};

// API to get products
export const getProducts = () => {
  return axios.get(`${API_URL}/products`);
};

// API to get products header
export const getProductsHeader = () => {
  return axios.get(`${API_URL}/products-header`);
};

// API to get social-links
export const getSocialLinks = () => {
  return axios.get(`${API_URL}/social-links`);
};

// API to get technologies
export const getTechnologies = () => {
  return axios.get(`${API_URL}/technologies`);
};

// API to get technologies header
export const getTechnologiesHeader = () => {
  return axios.get(`${API_URL}/technology-header`);
};

// API to get testimonials
export const getTestimonials = () => {
  return axios.get(`${API_URL}/testimonials`);
};

// API to get testimonial header
export const getTestimonialHeader = () => {
  return axios.get(`${API_URL}/testimonial-header`);
};
