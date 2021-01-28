import { createSlice } from '@reduxjs/toolkit';

import {
  getBlogs,
  getBlogsHeader,
  getAboutUs,
  getCarrer,
  getFounder,
  getGuids,
  getGuidsHeader,
  getHeroSlider,
  getProducts,
  getProductsHeader,
  getTechnologies,
  getTechnologiesHeader,
  getTestimonials,
  getTestimonialHeader,
  getWebsiteDetails,
  getChooseUs,
  getChooseUsHeader,
} from 'src/api';

import { getAboutUsSuccess } from './aboutUs';
import { getBlogsSuccess, getBlogsHeaderSuccess } from './blog';
import { getCarrerSuccess } from './carrer';
import { getFounderSuccess } from './founder';
import { getGuidSuccess, getGuidHeaderSuccess } from './guidings';
import { getProductsSuccess, getProductsHeaderSuccess } from './products';
import { getTechnologySuccess, getTechnologyHeaderSuccess } from './technology';
import {
  getTestimonialsSuccess,
  getTestimonialHeaderSuccess,
} from './testimonial';
import { getWebsiteDetailsSuccess } from './ui';
import { getchooseUsSuccess, getchooseUsHeaderSuccess } from './whyChooseUs';
import { getHeroBannerSuccess } from './herobanner';

function startLoading(state) {
  state.loading = true;
}

function loadingFailed(state, { payload }) {
  state.loading = false;
  state.error = payload;
}

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    loading: true,
    error: null,
  },
  reducers: {
    getApiStart: startLoading,

    getApiSuccess: (state) => {
      return {
        loading: false,
        error: null,
      };
    },

    getApiFailure: loadingFailed,
  },
});

export const { getApiStart, getApiSuccess, getApiFailure } = apiSlice.actions;

export default {
  api: apiSlice.reducer,
};

export const fatchApi = () => async (dispatch) => {
  try {
    dispatch(getApiStart());
    console.log('object');

    const { data: blogs } = await getBlogs();
    dispatch(getBlogsSuccess(blogs));
    const { data: blogsHeader } = await getBlogsHeader();
    dispatch(getBlogsHeaderSuccess(blogsHeader));
    const { data: aboutUs } = await getAboutUs();
    dispatch(getAboutUsSuccess(aboutUs));
    const { data: carrer } = await getCarrer();
    dispatch(getCarrerSuccess(carrer));
    const { data: founder } = await getFounder();
    dispatch(getFounderSuccess(founder));
    const { data: guids } = await getGuids();
    dispatch(getGuidSuccess(guids));
    const { data: guidsHeader } = await getGuidsHeader();
    dispatch(getGuidHeaderSuccess(guidsHeader));
    const { data: heroSlider } = await getHeroSlider();
    dispatch(getHeroBannerSuccess(heroSlider));
    const { data: products } = await getProducts();
    dispatch(getProductsSuccess(products));
    const { data: productsHeader } = await getProductsHeader();
    dispatch(getProductsHeaderSuccess(productsHeader));
    const { data: tgetTechnologies } = await getTechnologies();
    dispatch(getTechnologySuccess(tgetTechnologies));
    const { data: technologiesHeader } = await getTechnologiesHeader();
    dispatch(getTechnologyHeaderSuccess(technologiesHeader));
    const { data: testimonials } = await getTestimonials();
    dispatch(getTestimonialsSuccess(testimonials));
    const { data: testimonialHeader } = await getTestimonialHeader();
    dispatch(getTestimonialHeaderSuccess(testimonialHeader));
    const { data: websiteDetails } = await getWebsiteDetails();
    dispatch(getWebsiteDetailsSuccess(websiteDetails));
    const { data: chooseUs } = await getChooseUs();
    dispatch(getchooseUsSuccess(chooseUs));
    const { data: chooseUsHeader } = await getChooseUsHeader();
    dispatch(getchooseUsHeaderSuccess(chooseUsHeader));

    dispatch(getApiSuccess());
  } catch (error) {
    dispatch(geApiFailure(error.toString()));
  }
};
