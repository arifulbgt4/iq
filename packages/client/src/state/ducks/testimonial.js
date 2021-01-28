import { createSlice } from '@reduxjs/toolkit';

const testimonailSlice = createSlice({
  name: 'testimonial',
  initialState: {
    data: {},
  },
  reducers: {
    getTestimonialsSuccess: (state, { payload }) => {
      return {
        data: payload,
      };
    },
  },
});

const testimonailHeaderSlice = createSlice({
  name: 'testimonialHeader',
  initialState: {
    data: {},
  },
  reducers: {
    getTestimonialHeaderSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },
  },
});

export const { getTestimonialsSuccess } = testimonailSlice.actions;

export const { getTestimonialHeaderSuccess } = testimonailHeaderSlice.actions;

export default {
  testimonial: testimonailSlice.reducer,
  testimonialHeader: testimonailHeaderSlice.reducer,
};
