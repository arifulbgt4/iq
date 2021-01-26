import { createSlice } from '@reduxjs/toolkit';

import { getTestimonials, getTestimonialHeader } from 'src/api';

const data = [
  {
    id: 1,
    img: 'https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg',
    name: 'Airin Fatema',
    text:
      '“As a student with only a few savings in my account, I needed the right platform and path to invest my money. With Intel Quest, I knew I had reached my destination. The perfect guidance combined with the application of the best trading tools have made me quite self-sufficient in trading, thanks to Intel Quest.”',
    title: 'As a Junior Desiner',
  },
  {
    id: 2,
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAf9gA-CRlCv5tHlzbNDJnmqvnNG1jRrHGA&usqp=CAU',
    name: 'Ahmed Sunny',
    text:
      '“As a student with only a few savings in my account, I needed the right platform and path to invest my money. With Intel Quest, I knew I had reached my destination. The perfect guidance combined with the application of the best trading tools have made me quite self-sufficient in trading, thanks to Intel Quest.”',
    title: 'As a Junior Desiner',
  },
  {
    id: 3,
    img:
      'https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg',
    name: 'Airin Lubna',
    text:
      '“As a student with only a few savings in my account, I needed the right platform and path to invest my money. With Intel Quest, I knew I had reached my destination. The perfect guidance combined with the application of the best trading tools have made me quite self-sufficient in trading, thanks to Intel Quest.”',
    title: 'As a Junior Desiner',
  },
];

function startLoading(state) {
  state.loading = true;
}

function loadingFailed(state, { payload }) {
  state.data = [];
  state.loading = false;
  state.error = payload;
}

const testimonailSlice = createSlice({
  name: 'testimonial',
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {
    getTestimonialsStart: startLoading,

    getTestimonialsSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getTestimonialsFailure: loadingFailed,
  },
});

const testimonailHeaderSlice = createSlice({
  name: 'testimonialHeader',
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {
    getTestimonialHeaderStart: startLoading,

    getTestimonialHeaderSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getTestimonialHeaderFailure: loadingFailed,
  },
});

export const {
  getTestimonialsStart,
  getTestimonialsSuccess,
  getTestimonialsFailure,
} = testimonailSlice.actions;

export const {
  getTestimonialHeaderStart,
  getTestimonialHeaderSuccess,
  getTestimonialHeaderFailure,
} = testimonailHeaderSlice.actions;

export default {
  testimonial: testimonailSlice.reducer,
  testimonialHeader: testimonailHeaderSlice.reducer,
};

export const fatchTestimonials = () => async (dispatch) => {
  try {
    dispatch(getTestimonialsStart());

    const { data } = await getTestimonials();

    dispatch(getTestimonialsSuccess(data));
  } catch (error) {
    dispatch(getTestimonialsFailure(error.toString()));
  }
};

export const fatchTestimonialHeader = () => async (dispatch) => {
  try {
    dispatch(getTestimonialHeaderStart());

    const { data } = await getTestimonialHeader();

    dispatch(getTestimonialHeaderSuccess(data));
  } catch (error) {
    dispatch(getTestimonialHeaderFailure(error.toString()));
  }
};
