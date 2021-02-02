import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardFooter,
  Button,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faShareAlt,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';

import { getBlogById } from 'src/api';

const BlogDetails = () => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  const fatchData = async (id) => {
    const { data } = await getBlogById(id);
    setBlog(data);
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      fatchData(id);
    }
  }, [id]);

  if (loading) {
    return 'Loading';
  }

  const image = process.env.API_URL + blog.image.url;

  const shareUrl = window.location.href;

  return (
    <Container className="py-5">
      <Row>
        <Col md={{ size: 8, offset: 2 }} sm={{ size: 10, offset: 1 }}>
          <Card className="blog-details">
            <figure>
              <CardImg src={image} alt="blog" className="img-fluid"></CardImg>
            </figure>
            <CardBody className="py-2 py-sm-3 py-md-4 px-3 px-sm-4 px-md-5">
              <CardTitle tag="h2" className="py-3 border-bottom mb-4">
                {blog.title}

                <div className="blog-details-body_details">
                  <CardSubtitle tag="span">
                    <FontAwesomeIcon icon={faUserCircle} className="icon" />
                    <small className="name text-capitalize ms-2">
                      {blog.author}
                    </small>
                  </CardSubtitle>
                  <CardSubtitle tag="span" className="ps-4">
                    <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                    <small className="date text-capitalize ms-2">
                      {blog.date}
                    </small>
                  </CardSubtitle>
                </div>
              </CardTitle>
              {blog?.large_description && (
                <ReactMarkdown>{blog.large_description}</ReactMarkdown>
              )}
            </CardBody>
            <CardFooter className="bg-transparent d-flex justify-content-end me-3 border-0">
              <FacebookShareButton url={shareUrl}>
                <div className="p-1">
                  <FacebookIcon size={32} round className="ms-1" />
                </div>
              </FacebookShareButton>
              <WhatsappShareButton url={shareUrl}>
                <div className="p-1">
                  <WhatsappIcon size={32} round />
                </div>
              </WhatsappShareButton>
              <LinkedinShareButton url={shareUrl}>
                <div className="p-1">
                  <LinkedinIcon size={32} round />
                </div>
              </LinkedinShareButton>
              <TwitterShareButton url={shareUrl}>
                <div className="p-1">
                  <TwitterIcon size={32} round />
                </div>
              </TwitterShareButton>
              <EmailShareButton url={shareUrl}>
                <div className="p-1">
                  <EmailIcon size={32} round />
                </div>
              </EmailShareButton>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(BlogDetails);
