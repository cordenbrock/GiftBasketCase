import React from 'react';
import ReusableForm from './ReusableForm';

function EditProduct(props) {
  const { product } = props;

  function handleEditProductFormSubmission(e) {
    e.preventDefault();
    props.onEditProduct(
      {
        recipient: e.target.recipient.value,
        sender: e.target.sender.value,
        message: e.target.message.value,
        id: product.id
      }
    )
  }
  
  return (
    <>
      <ReusableForm
      formSubmissionHandler={handleEditProductFormSubmission}
      buttonText="Update Product"/>
    </>
  );
}



export default EditProduct;