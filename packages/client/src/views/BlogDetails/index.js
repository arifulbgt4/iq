// External Components
import React from 'react';
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardText,
  CardImg,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogDetails = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  const blogs = useSelector((store) => store.blogpost);
  const blog = blogs && blogs.filter((item) => item.id === parseInt(id))[0];

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <Card className="blog-details">
            <figure>
              <CardImg
                src={blog.img}
                alt="blog"
                className="img-fluid"
              ></CardImg>
            </figure>
            <CardBody className="p-4 px-5">
              <CardTitle tag="h2" className="py-3 border-bottom">
                {blog.title}

                <div className="blog-details-body_details mb-2">
                  <CardSubtitle tag="span" className="me-5">
                    <FontAwesomeIcon icon={faUserCircle} className="icon" />
                    <small className="name text-capitalize ms-2">
                      {blog.bloggerName}
                    </small>
                  </CardSubtitle>
                  <CardSubtitle tag="span" className="ps-4">
                    <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                    <small className="date text-capitalize ms-2">
                      {blog.createDate}
                    </small>
                  </CardSubtitle>
                </div>
              </CardTitle>
              <CardText>{blog.description}</CardText>{' '}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(BlogDetails);
