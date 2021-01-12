import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import applePc from 'src/assets/image/applePc.png';
import wavemain from 'src/assets/image/wave/wavemain.png';
import wavedotmark from 'src/assets/image/wave/wavedotmark.png';
import wavedot from 'src/assets/image/wave/wavedot.png';
import wave from 'src/assets/image/wave/wave.png';
import SectionTitle from 'src/components/SectionTitle';

const OurSoftware = () => {
  return (
    <Row>
      <SectionTitle title="Our Sofware" />
      <Col md={6}>
        <div className="pt-5 text-area">
          <h3 className="pb-2">Education And Research</h3>
          <p>
            That is another testament to the fact that investing without an
            educatidividuals, companies, and even governments that ran up debts
            during the boom usually suffer the most.
            <span className="d-block pt-3">
              governments that ran up debts during the boom usually suffer the
              most.
            </span>
          </p>
        </div>
        <div className="position-relative wave-animation">
          <img className="w-100" src={wave} alt="" />
          <img className="wavedot-1" src={wavedot} alt="" />
          <img className="wavedotmark-1" src={wavedotmark} alt="" />
          <img className="wavedot-2" src={wavedot} alt="" />
          <img className="wavedot-3" src={wavedot} alt="" />
        </div>
      </Col>
      <Col md={6}>
        <img className="w-100 p-5" src={applePc} alt="" />
      </Col>
    </Row>
  );
};

export default OurSoftware;
