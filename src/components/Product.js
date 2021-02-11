import React from "react";
import PropTypes from "prop-types";
// import Container from 'react-bootstrap/Container';

function Product(props){
  return (
    <>
      <div onClick = {() => props.whenProductClicked(props.id)}>
        <h4>{props.name}</h4>
          <div className="inner-div">
            <p>{props.recipient}</p>
            <p>{props.sender}</p>
            <p>{props.message}</p>
          </div>
          <hr/>
      </div>
    </>
  );
}
Product.propTypes = {
  recipient: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Product;