import { createSlice } from '@reduxjs/toolkit';

const data = [
  {
    id: 1,
    img:
      'data:image/jpeg;base64,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',
    name: 'Airin Sultana',
    text:
      '“As a student with only a few savings in my account, I needed the right platform and path to invest my money. With Intel Quest, I knew I had reached my destination. The perfect guidance combined with the application of the best trading tools have made me quite self-sufficient in trading, thanks to Intel Quest.”',
  },
  {
    id: 2,
    img:
      'https://image.shutterstock.com/image-vector/vector-simple-male-profile-icon-260nw-1388357696.jpg',
    name: 'Airin Sultana',
    text:
      '“As a student with only a few savings in my account, I needed the right platform and path to invest my money. With Intel Quest, I knew I had reached my destination. The perfect guidance combined with the application of the best trading tools have made me quite self-sufficient in trading, thanks to Intel Quest.”',
  },
  {
    id: 3,
    img:
      'https://i.pinimg.com/474x/bc/d4/ac/bcd4ac32cc7d3f98b5e54bde37d6b09e.jpg',
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
