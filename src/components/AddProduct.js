import React from 'react';
import { v4 } from "uuid";
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function AddProduct(props) {

  function handleNewProductFormSubmission(e) {
    e.preventDefault();
    props.onNewProductCreation({
      recipient: e.target.recipient.value,
      sender: e.target.sender.value,
      message: e.target.message.value,
      id: v4()
    })
  }

  return (
    <>
      <ReusableForm
        formSubmissionhandler={handleNewProductFormSubmission}
        buttonText="Add to Cart"/>
    </>
  );
}

AddProduct.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default AddProduct;

