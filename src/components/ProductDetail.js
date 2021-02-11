import React from "react";
import PropTypes from 'prop-types'

function ProductDetail(props){
  const { product, onClickingDelete } = props
  return (
    <React.Fragment>
      <h1>Product Detail</h1>
      <h3>{product.name}</h3>
      <p>{product.sender}</p>
      <p>{product.recipient}</p>
      <button onClick={()=> onClickingDelete(product.id)}>Delete Product</button>
      <hr/>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default ProductDetail;