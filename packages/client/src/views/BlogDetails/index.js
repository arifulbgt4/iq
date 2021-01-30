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
  faShare,
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
        <Col>
          <Card className="blog-details">
            <figure>
              <CardImg src={image} alt="blog" className="img-fluid"></CardImg>
            </figure>
            <CardBody className="p-4 px-5">
              <CardTitle tag="h2" className="py-3 border-bottom">
                {blog.title}

                <div className="blog-details-body_details mb-2">
                  <CardSubtitle tag="span" className="me-5">
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
              <Button size="sm" className="bg-transparent border-0">
                {' '}
                <FontAwesomeIcon icon={faShare} />{' '}
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(BlogDetails);
