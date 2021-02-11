import React from 'react';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productFormVisible: true,
      masterProductList: [],
      selectedProduct: null,
      editing: false
    };
  }

  
  handleEditClick = () => {
    console.log("edit clicked");
    this.setState({editing: true});
  }
  
  handleClick = () => {
    
    if (this.state.selectedProduct != null) {
      this.setState({
        productFormVisible: false,
        selectedProduct: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        productFormVisible: !prevState.productFormVisible,
      }));
    }
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

  handleAddingNewProductToList = (newProduct) => {
    const newMasterProductList = this.state.masterProductList.concat(newProduct);
    this.setState({masterProductList: newMasterProductList,
                  productFormVisible: false });
  }

  handleEditingProductInList = (productToEdit)=> {
    const editedMasterProductList = this.state.masterProductList
      .filter(product => product.id !== this.state.selectedProduct.id)
      .concat(productToEdit);
    this.setState({
      masterProductList: editedMasterProductList,
      editing: false,
      selectedProduct: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.editing){
      currentlyVisibleState = <EditProduct product = {this.state.selectedProduct} onEditProduct = {this.handleEditingProductInList}/>
      buttonText = "Return To Product List";
    }
    else if(this.state.selectedProduct != null){
      currentlyVisibleState = <ProductDetail product = {this.state.selectedProduct} onClickingDelete = {this.handleDelete} onClickingEdit = {this.handleEditClick}/>
      buttonText = "Return to Product List";
    }
    else if(this.state.productFormVisible){
      currentlyVisibleState = <AddProduct onNewProductCreation={this.handleAddingNewProductToList}/>
      buttonText = "View Cart"
    } else {
      console.log("Product List");
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