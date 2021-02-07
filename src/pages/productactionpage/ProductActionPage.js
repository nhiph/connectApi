import { Component } from 'react';
import ProductList from '../../components/productList/ProductList';
import ProductItem from '../../components/productItem/ProductItem';
import callApi from '../../utils/apiCaller';
import { Link } from 'react-router-dom';

class ProductActionPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      chkbStatus: ''
    };
  }

  componentDidMount(){
    var {match} = this.props;
    if(match){
      var id = match.params.id;
      console.log(id);
      callApi(`products/${id}`,'GET',null).then(res => {
        var data = res.data;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          chkbStatus: data.status
        });
      });
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  onSave = (e) => {
    e.preventDefault();
    console.log(this.state);
    var { id, txtName, txtPrice, chkbStatus } = this.state;
    var { history } = this.props;
    if(id){ //update
      // http://localhost:3000/product/:id => HTTP Method: PUT
        callApi(`products/${id}`, 'PUT', {
          name: txtName,
          price: txtPrice,
          status: chkbStatus
        }).then(res => {
          history.goBack();
        });
    }else{ //add new
      callApi('products', 'POST', {
        name: txtName,
        price: txtPrice,
        status: chkbStatus
      }).then(res => {
        console.log(res);
        history.goBack();
      });
    }
  }

  render () {
    var { txtName, txtPrice, chkbStatus } = this.state;
    var products = [];
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên sản phẩm:</label>
            <input 
              type="text" 
              className="form-control" 
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Giá:</label>
            <input 
              type="number" 
              className="form-control" 
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Trạng thái:</label>
          </div>
          <div className="checkbox">
            <label>
              <input 
                type="checkbox" 
                name="chkbStatus"
                value={chkbStatus}
                onChange={this.onChange}
                checked={chkbStatus}
              />
              Còn hàng
            </label>
          </div>
          <Link to="/product-list" className="btn btn-danger mr-10">
            Quay lại trang chủ
          </Link>
          <button type="submit" className="btn btn-primary">Lưu lại</button>
        </form>
      </div> 
  );
}

showProduct = (products) => {
  var result = null;
  if(products.length > 0){
    result = products.map((product, index) => {
      return (
        <ProductItem 
          key={index}
          product={product}
          index={index}
        />
      );
    });
  }
  return result;
}

}

export default ProductActionPage;
