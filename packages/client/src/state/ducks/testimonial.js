import { createSlice } from '@reduxjs/toolkit';

const data = [
  {
    id: 1,
    img: 'https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg',
    name: 'Airin Sultana',
    text:
      '“As a student with only a few savings in my account, I needed the right platform and path to invest my money. With Intel Quest, I knew I had reached my destination. The perfect guidance combined with the application of the best trading tools have made me quite self-sufficient in trading, thanks to Intel Quest.”',
  },
  {
    id: 2,
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAf9gA-CRlCv5tHlzbNDJnmqvnNG1jRrHGA&usqp=CAU',
    name: 'Airin Sultana',
    text:
      '“As a student with only a few savings in my account, I needed the right platform and path to invest my money. With Intel Quest, I knew I had reached my destination. The perfect guidance combined with the application of the best trading tools have made me quite self-sufficient in trading, thanks to Intel Quest.”',
  },
  {
    id: 3,
    img:
      'https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg',
    name: 'Airin Sultana',
    text:
      '“As a student with only a few savings in my account, I needed the right platform and path to invest my money. With Intel Quest, I knew I had reached my destination. The perfect guidance combined with the application of the best trading tools have made me quite self-sufficient in trading, thanks to Intel Quest.”',
  },
];

const testimonailSlice = createSlice({
  name: 'testimonial',
  initialState: data,
  reducers: {},
});

export default {
  testimonial: testimonailSlice.reducer,
};
