import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fatchTechnologyHeader } from 'src/state/ducks/technology';
import SectionTitle from 'src/components/SectionTitle';

const Header = () => {
  const { data, loading } = useSelector((store) => store.technologyHeader);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchTechnologyHeader());
  }, [dispatch]);

  if (loading) {
    return 'Loadding';
  }

  return <SectionTitle color="white" title={data?.title} />;
};

export default Header;
