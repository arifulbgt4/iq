import { createSlice } from '@reduxjs/toolkit';

import thumbnail from 'src/assets/image/blog/blog.png';

const postData = [
  {
    id: 1,
    img: thumbnail,
    createDate: 'feb 19, 2019',
    title: 'Brabus is smooth animated portfolio',
    description:
      'Layout for agencies and freelancers. Fully animated and unique sections make item more attractive. Brabus is the best way to createagency or portfolio website. It is easy to customize codes, based onBootstrap and Sass.Brabus is smooth.',
      bloggerName:'Arefin Kuhi'
  },
  {
    id: 2,
    img: thumbnail,
    createDate: 'feb 19, 2019',
    title: 'Brabus is smooth animated portfolio',
    description:
      'Layout for agencies and freelancers. Fully animated and unique sections make item more attractive. Brabus is the best way to createagency or portfolio website. It is easy to customize codes, based onBootstrap and Sass.Brabus is smooth.',
      bloggerName:'Arefin Kuhi'
  },
  {
    id: 3,
    img: thumbnail,
    createDate: 'feb 19, 2019',
    title: 'Brabus is smooth animated portfolio',
    description:
      'Layout for agencies and freelancers. Fully animated and unique sections make item more attractive. Brabus is the best way to createagency or portfolio website. It is easy to customize codes, based onBootstrap and Sass.Brabus is smooth.',
      bloggerName:'Arefin Kuhi'
  },
  {
    id: 4,
    img: thumbnail,
    createDate: 'feb 19, 2019',
    title: 'Brabus is smooth animated portfolio',
    description:
      'Layout for agencies and freelancers. Fully animated and unique sections make item more attractive. Brabus is the best way to createagency or portfolio website. It is easy to customize codes, based onBootstrap and Sass.Brabus is smooth.',
      bloggerName:'Arefin Kuhi'
  },
];

const blogSlice = createSlice({
  name: 'blog',
  initialState: postData,
  reducers: {},
});

export default {
  blogpost: blogSlice.reducer,
};
