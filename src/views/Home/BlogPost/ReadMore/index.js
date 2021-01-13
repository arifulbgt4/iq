import React from 'react';
import { Card, CardFooter, CardImg, Button, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import readMoreImg from 'src/assets/image/blog-read-more.png';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ReadMore = () => {
  return (
    <Card className="blog-read-more">
      <CardBody>
        <figure className="position-relative overflow-hidden">
          <CardImg top width="100%" src={readMoreImg} alt="read-more" />
        </figure>
      </CardBody>
      <CardFooter>
        <Link className="btn btn-primary d-block">
          read more visit our blog <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ReadMore;
