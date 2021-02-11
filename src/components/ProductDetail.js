import React from "react";
import PropTypes from 'prop-types';


function ProductDetail(props){
  const { product, onClickingDelete, onClickingEdit } = props;
  const styleComponent = {
    backgroundColor: "#6b8594"
  }

  return (
    <React.Fragment>
      <div style={styleComponent}>
        <h1>Product Detail</h1>
        <p>To: {product.recipient}</p>
        <p>From: {product.sender}</p>
        <p>{product.message}</p>
        <p>{product.item1}</p>
        <p>{product.item2}</p>
        <p>{product.item3}</p>
        <button onClick={()=> onClickingDelete(product.id)}>Delete Product</button>
        <button onClick={()=> onClickingEdit(product.id)}>Edit Product</button>
        <hr/>
      </div>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default ProductDetail;