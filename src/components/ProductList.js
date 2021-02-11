import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types'

function ProductList(props){
  return (
    <React.Fragment>
      <h1>Product List</h1>
      {props.ticketList.map((product) =>
      
      <Product
        whenProductClicked = { props.onProductSelection}
        recipient={product.recipient}
        sender={product.sender}
        message={product.message}
        id={product.id}
        key={product.id}
      />
      )}
    </React.Fragment>
  );
}

ProductList.propTypes = {
  productlist: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default ProductList;