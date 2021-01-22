import { createSlice } from '@reduxjs/toolkit';

import { getBlogs } from 'src/api';

import blogImg from 'src/assets/image/blog/blog.png';

const blogPosts = [
  {
    id: 1,
    img: blogImg,
    title: 'blog title here',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the `,
    bloggerName: 'arif',
    createDate: 'october 30, 2019',
  },
  {
    id: 2,
    img: blogImg,
    title: 'blog title here',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the `,
    bloggerName: 'sunny',
    createDate: 'october 30, 2019',
  },
  {
    id: 3,
    img: blogImg,
    title: 'blog title here',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the `,
    bloggerName: 'antor',
    createDate: 'october 30, 2019',
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

const blogSlice = createSlice({
  name: 'blog',
  initialState: blogPosts,
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

export const {
  getBlogsStart,
  getBlogsSuccess,
  getBlogsFailure,
} = blogSlice.actions;

export default {
  blogs: blogSlice.reducer,
};

export const fatchBlogs = () => async (dispatch) => {
  try {
    dispatch(getBlogsStart());

    const { data } = await getBlogs();

    dispatch(getBlogsSuccess(data));
  } catch (error) {
    dispatch(getBlogsFailure(error.toString()));
  }
};
