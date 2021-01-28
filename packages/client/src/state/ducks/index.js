import { combineReducers } from '@reduxjs/toolkit';

import ui from './ui';
import products from './products';
import blog from './blog';
import guidings from './guidings';
import testimonial from './testimonial';
import herobanner from './herobanner';
import whyChooseUs from './whyChooseUs';
import founder from './founder';
import technology from './technology';
import aboutUs from './aboutUs';
import carrer from './carrer';
import blogpost from './blogpost';
import actionApi from './actionApi';

export default combineReducers({
  ...ui,
  ...products,
  ...blog,
  ...guidings,
  ...testimonial,
  ...herobanner,
  ...whyChooseUs,
  ...founder,
  ...technology,
  ...aboutUs,
  ...carrer,
  ...blogpost,
  ...actionApi,
});
