import { createSlice } from '@reduxjs/toolkit';

import { getGuids } from 'src/api';

const data = [
  {
    id: 1,
    style: '',
    img: 'https://antor.thememaster.net/AllImage/goal.png',
    title: 'Excellence',
    description:
      'Good is not enough; we strive to be excellent in all we do. We seek to be differentiated and original in our thinking. We focus on achieving superior risk-adjusted-performance.',
  },
  {
    id: 2,
    style: 'justify-content-end',
    img: 'https://antor.thememaster.net/AllImage/united.png',
    title: 'Innovation',
    description:
      'Innovation is the cornerstone of our business. We never settle for mediocre solutions. It is in our essence to use our initiation and think unconventionally. We undertake careful analysis, research, and develop custom solutions that not only resolve your challenges, but also project you to be remarkable.',
  },
  {
    id: 3,
    style: '',
    img: 'https://antor.thememaster.net/AllImage/handshake.png',
    title: 'Innovation',
    description:
      'Innovation is the cornerstone of our business. We never settle for mediocre solutions. It is in our essence to use our initiation and think unconventionally. We undertake careful analysis, research, and develop custom solutions that not only resolve your challenges, but also project you to be remarkable.',
  },
  {
    id: 2,
    style: 'justify-content-end',
    img: 'https://antor.thememaster.net/AllImage/idea.png',
    title: 'Innovation',
    description:
      'Innovation is the cornerstone of our business. We never settle for mediocre solutions. It is in our essence to use our initiation and think unconventionally. We undertake careful analysis, research, and develop custom solutions that not only resolve your challenges, but also project you to be remarkable.',
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

const guidingSlice = createSlice({
  name: 'gudings',
  initialState: data,
  reducers: {
    getGuidStart: startLoading,

    getGuidSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getGuidFailure: loadingFailed,
  },
});

export const {
  getGuidStart,
  getGuidSuccess,
  getGuidFailure,
} = guidingSlice.actions;

export default {
  guidings: guidingSlice.reducer,
};

export const fatchGuid = () => async (dispatch) => {
  try {
    dispatch(getGuidStart());

    const { data } = await getGuids();

    dispatch(getGuidSuccess(data));
  } catch (error) {
    dispatch(getGuidFailure(error.toString()));
  }
};
