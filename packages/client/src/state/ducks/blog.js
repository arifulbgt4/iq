import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    data: {},
  },
  reducers: {
    getBlogsSuccess: (state, { payload }) => {
      return {
        data: payload,
      };
    },
  },
});

const blogHeaderSlice = createSlice({
  name: 'blogHeader',
  initialState: {
    data: {},
  },
  reducers: {
    getBlogsHeaderSuccess: (state, { payload }) => {
      return {
        data: payload,
      };
    },
  },
});

export const { getBlogsSuccess } = blogSlice.actions;

export const { getBlogsHeaderSuccess } = blogHeaderSlice.actions;

export default {
  blogs: blogSlice.reducer,
  blogsHeader: blogHeaderSlice.reducer,
};
