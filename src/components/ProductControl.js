import React from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productFormVisible: true,
      masterProductList: [],
      selectedProduct: null
    };
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.masterProductList.filter(product => product.id === id)[0];
    this.setState({selectedProduct: selectedProduct,
                  productFormVisible: true });
  }

  handleDelete = (productId) => {
    const products = this.state.masterProductList.filter(product => product.id !== productId);
    this.setState({ masterProductList: products,
                    selectedProduct: null});
  }
  handleClick = () => {
    
    if (this.state.selectedProduct != null) {
      this.setState({
        productFormVisible: false,
        selectedProduct: null
      });
    } else {
      this.setState(prevState => ({
        productFormVisible: !prevState.productFormVisible,
      }));
    }
  }


  handleAddingNewProductToList = (newProduct) => {
    console.log(newProduct.id);
    const newMasterProductList = this.state.masterProductList.concat(newProduct);
    this.setState({masterProductList: newMasterProductList,
                  productFormVisible: false });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.selectedProduct != null){
      currentlyVisibleState = <ProductDetail product = {this.state.selectedProduct} onClickingDelete = {this.handleDelete}/>
      buttonText = "Return to Product List";
    }
    else if(this.state.productFormVisible){
      currentlyVisibleState = <AddProduct onNewProductCreation={this.handleAddingNewProductToList}/>
      buttonText = "View Cart"
    } else {
      currentlyVisibleState = <ProductList ticketList={this.state.masterProductList} onProductSelection={this.handleChangingSelectedProduct} />
      buttonText = "Customize a Basket"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
      );
    }
  }

  export default ProductControl;