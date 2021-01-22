import React from 'react';

import { useForm } from 'react-hook-form';
import { Button, Col, Row, Form, FormGroup, Label } from 'reactstrap';

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="contact-us">
        <Row>
          <Col lg={6}>
            <FormGroup row>
              <Label htmlFor="name" className=" fs-5 fw-bold ">
                Name*
              </Label>
              <Col md={12}>
                <input
                  name="firstName"
                  ref={register({
                    maxLength: 30,
                  })}
                  type="text"
                  placeholder="Enter you full name"
                  className="form-control inp"
                />
              </Col>
            </FormGroup>
          </Col>

          <Col lg={6}>
            <FormGroup row>
              <Label htmlFor="email" className="fs-5 fw-bold">
                Email*
              </Label>
              <Col md={12}>
                <input
                  name="mail"
                  ref={register({
                    maxLength: 30,
                  })}
                  type="email"
                  placeholder="Enter your Email Address"
                  className="form-control inp"
                />
              </Col>
            </FormGroup>
          </Col>
        </Row>

        <div className="mb-3  my-4">
          <FormGroup row>
            <Label htmlFor="sub" className="fs-5 fw-bold">
              Subject*
            </Label>
            <Col md={12}>
              <input
                name="subject"
                ref={register}
                type="text"
                placeholder="Subject"
                className="form-control inp"
              />
            </Col>
          </FormGroup>
        </div>

        <div className="mb-3  my-4">
          <FormGroup row>
            <Label htmlFor="msg" className="fs-5 fw-bold">
              Message
            </Label>
            <Col md={12}>
              <textarea
                name="message"
                placeholder="Type your message here..."
                ref={register({
                  maxLength: 200,
                })}
                className="form-control inp "
                rows="4"
              />
            </Col>
          </FormGroup>
        </div>

        <div className="d-grid gap-2">
          <button class="btn btn-primary" type="button">
            Submit
          </button>
        </div>
      </Form>
    </>
  );
};

export default ContactForm;
