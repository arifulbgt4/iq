import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

import SectionTitle from 'src/components/SectionTitle';
import Video from './Video';

const AboutUs = () => {
  const { data } = useSelector((store) => store.aboutUs);
  console.log('🚀 ~ file: index.js ~ line 10 ~ AboutUs ~ data', data);
  const { title, description, video, video_poster } = data;

  const videoUrl = process.env.API_URL + video.url;
  const posterUrl = process.env.API_URL + video_poster.url;

  return (
    <section className="about-us">
      <Container fluid>
        <SectionTitle
          title={title}
          description={description}
          border={false}
          color="primary"
        />
      </Container>
      <div className="mt-2 mt-xl-0 mb-5 mb-xl-0 about-us-row">
        <Video src={videoUrl} poster={posterUrl} mime={video.mime} />
      </div>
    </section>
  );
};

export default AboutUs;
