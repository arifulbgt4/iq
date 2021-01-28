import React from 'react';
import { useSelector } from 'react-redux';

import SectionTitle from 'src/components/SectionTitle';

const Header = () => {
  const { data } = useSelector((store) => store.technologyHeader);

  return <SectionTitle color="white" title={data?.title} />;
};

export default Header;
