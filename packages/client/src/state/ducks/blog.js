import { createSlice } from '@reduxjs/toolkit';

import { getBlogs, getBlogsHeader } from 'src/api';

function startLoading(state) {
  state.loading = true;
}

function loadingFailed(state, { payload }) {
  state.data = [];
  state.loading = false;
  state.error = payload;
}

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {
    getBlogsStart: startLoading,

    getBlogsSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getBlogsFailure: loadingFailed,
  },
});

const blogHeaderSlice = createSlice({
  name: 'blogHeader',
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {
    getBlogsHeaderStart: startLoading,

    getBlogsHeaderSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getBlogsHeaderFailure: loadingFailed,
  },
});

export const {
  getBlogsStart,
  getBlogsSuccess,
  getBlogsFailure,
} = blogSlice.actions;

export const {
  getBlogsHeaderStart,
  getBlogsHeaderSuccess,
  getBlogsHeaderFailure,
} = blogHeaderSlice.actions;

export default {
  blogs: blogSlice.reducer,
  blogsHeader: blogHeaderSlice.reducer,
};

export const fatchBlogs = () => async (dispatch) => {
  try {
    dispatch(getBlogsStart());

    const { data } = await getBlogs();
    let blogs;
    if (data.length > 0) {
      blogs = data.reverse();
    }
    dispatch(getBlogsSuccess(blogs));
  } catch (error) {
    dispatch(getBlogsFailure(error.toString()));
  }
};

export const fatchBlogsHeader = () => async (dispatch) => {
  try {
    dispatch(getBlogsHeaderStart());

    const { data } = await getBlogsHeader();

    dispatch(getBlogsHeaderSuccess(data));
  } catch (error) {
    dispatch(getBlogsHeaderFailure(error.toString()));
  }
};
