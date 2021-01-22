import { combineReducers } from '@reduxjs/toolkit';

import ui from './ui';
import products from './products';
import blog from './blog';
import guidings from './guidings';
import testimonial from './testimonial';
import herobanner from './herobanner';
import whyChooseUs from './whyChooseUs';
import founder from './founder';

export default combineReducers({
  ...ui,
  ...products,
  ...blog,
  ...guidings,
  ...testimonial,
  ...herobanner,
  ...whyChooseUs,
  ...founder,
});
