import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    title,
    body,
    buttonColor,
    cta_primary,
    cta_secondary,
    children,
    handleFormSubmit,
    isModalOpen,
    setIsModalOpen
  } = props;

  // const [modal, setModal] = useState(false);


  const toggle = () => setIsModalOpen(!isModalOpen);
  return (
    <div>
      <Button color={buttonColor} onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={isModalOpen} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
           {children}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleFormSubmit}>{cta_primary}</Button>{' '}
          <Button color="secondary" onClick={toggle}>{cta_secondary}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;


ModalExample.defaultProps ={
  buttonColor:'primary'
};

ModalExample.propTypes={
  title:PropTypes.string.isRequired,
  buttonColor:PropTypes.string,
}