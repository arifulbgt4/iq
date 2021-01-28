import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { useForm } from 'react-hook-form';

import { applyCarrer } from 'src/api';

const ApplyForm = (props) => {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const { register, handleSubmit, errors, reset } = useForm();

  // handleSubmit method
  const onSubmit = async (data) => {
    try {
      const res = applyCarrer(
        data.name,
        data.number,
        data.email,
        data.qualification,
        data.institution,
        data.about_us
      );
      reset();
      toggle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button
        color="primary"
        className=" d-inline-block d-md-block  ms-auto rounded-pill px-5"
        onClick={toggle}
      >
        Apply Now
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader tag="h2" toggle={toggle}>
          Apply
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit(onSubmit)} className="contact-us">
            <FormGroup>
              <Label className=" fs-5 text-primary fw-bold  pb-2">Name</Label>
              <Input
                type="text"
                name="name"
                className="form-control inp"
                innerRef={register({
                  required: true,
                })}
              />
              {errors.name && errors.name.type === 'required' && (
                <p className="text-danger">Empty , Input your Name</p>
              )}
            </FormGroup>
            ​
            <FormGroup>
              <Label className=" fs-5 text-primary fw-bold  pb-2">Number</Label>
              <Input
                type="number"
                name="number"
                className="form-control inp"
                innerRef={register({
                  required: true,
                })}
              />
              {errors.number && errors.number.type === 'required' && (
                <p className="text-danger">Empty , Input your Number</p>
              )}
            </FormGroup>
            ​
            <FormGroup>
              <Label className=" fs-5 text-primary fw-bold  pb-2">
                {' '}
                Email{' '}
              </Label>
              <Input
                type="email"
                name="email"
                className="form-control inp"
                innerRef={register({
                  required: true,
                })}
              />
              {errors.email && errors.email.type === 'required' && (
                <p className="text-danger">Empty , Input your Email</p>
              )}
            </FormGroup>
            ​
            <FormGroup>
              <Label className=" fs-5 text-primary fw-bold  pb-2">
                {' '}
                Qualification{' '}
              </Label>
              <Input
                type="text"
                name="qualification"
                className="form-control inp"
                innerRef={register({
                  required: true,
                })}
              />
              {errors.qualification &&
                errors.qualification.type === 'required' && (
                  <p className="text-danger">
                    Empty , Input your Qualification
                  </p>
                )}
            </FormGroup>
            ​
            <FormGroup>
              <Label className=" fs-5 text-primary fw-bold  pb-2">
                {' '}
                institution{' '}
              </Label>
              <Input
                type="text"
                name="institution"
                className="form-control inp"
                innerRef={register({
                  required: true,
                })}
              />
              {errors.institution && errors.institution.type === 'required' && (
                <p className="text-danger">Empty , Input your institution</p>
              )}
            </FormGroup>
            ​
            <FormGroup>
              <Label className=" fs-5 text-primary fw-bold  pb-2">
                Where did you hear about us
              </Label>
              <Input
                type="text"
                name="about_us"
                className="form-control inp"
                innerRef={register({
                  required: true,
                })}
              />
              {errors.about_us && errors.about_us.type === 'required' && (
                <p className="text-danger">Empty , Input your About Us</p>
              )}
            </FormGroup>
            ​ ​
            <Button
              type="submit"
              size="lg"
              color="primary"
              className="my-4 float-end"
            >
              Apply
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ApplyForm;
