import { createSlice } from '@reduxjs/toolkit';

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

const blogSlice = createSlice({
  name: 'blog',
  initialState: blogPosts,
  reducers: {},
});

export default {
  blogs: blogSlice.reducer,
};
