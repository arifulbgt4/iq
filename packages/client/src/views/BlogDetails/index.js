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
} from 'reactstrap';
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
    <Container className="blog-details py-5">
      <Row>
        <Col>
          <Card>
            <CardImg src={blog.image} alt="blog" className="img-fluid"></CardImg>
            <CardText className="text-primary mb-3 text-uppercase">
              {blog.date}
            </CardText>
            <CardBody>
              <CardTitle>{blog.title}</CardTitle>
              <CardText>{blog.description}</CardText>{' '}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(BlogDetails);
