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
      item1: e.target.item1.value,
      item2: e.target.item2.value,
      item3: e.target.item3.value,
      id: v4()
    })
  }
  const styledForm = {

  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewProductFormSubmission}
        buttonText="Add to Cart"/>
    </>
  );
}

AddProduct.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default AddProduct;

