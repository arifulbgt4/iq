import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { applyCarrer } from 'src/api';

const ApplyForm = (props) => {
  const { className } = props;
  const { register, handleSubmit, errors, reset } = useForm();

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

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
      toast('🦄  Apply successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
          <Form onSubmit={handleSubmit(onSubmit)} className="apply-form">
            <FormGroup>
              <Label className="fw-bold text-primary">Name</Label>
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
              <Label className="fw-bold text-primary">Number</Label>
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
              <Label className="fw-bold text-primary">Email</Label>
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
              <Label className="fw-bold text-primary">Qualification</Label>
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
              <Label className="fw-bold text-primary">Institution</Label>
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
              <Label className="fw-bold text-primary">
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
              className="mt-4 float-end"
            >
              Apply
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ApplyForm;
