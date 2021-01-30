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
              <ReactMarkdown>{blog.description}</ReactMarkdown>
              {blog?.large_description && (
                <ReactMarkdown>{blog.large_description}</ReactMarkdown>
              )}
            </CardBody>
            <CardFooter className="bg-transparent d-flex justify-content-end me-3 border-0">
              <Button
                outline
                color="primary"
                size="sm"
                className=" text-capitalize fw-bold mb-1"
              >
                <FontAwesomeIcon icon={faShareAlt} /> &nbsp;share
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(BlogDetails);
