import Sidebar from '../../components/sidebar/Sidebar';
import './newProduct.css';
// import {insertProduct} from '../../app/slices/products'
export default function NewProduct() {
  return (
    <div className="container">
      <Sidebar />
      <div className="newProduct">
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm">
          <div className="addProductItem">
            <label>Image</label>
            <input type="file" id="file" />
          </div>
          <div className="addProductItem">
            <label>Title</label>
            <input name="title" type="text" placeholder="Apple Airpods" />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <input
              name="description"
              type="text"
              placeholder="description..."
            />
          </div>
          <div className="addProductItem">
            <label>Price</label>
            <input name="price" type="number" placeholder="100" />
          </div>
          <div className="addProductItem">
            <label>Categories</label>
            <input type="text" placeholder="jeans,skirts" />
          </div>
          <div className="addProductItem">
            <label>Stock</label>
            <select name="inStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <button className="addProductButton">Create</button>
        </form>
      </div>
    </div>
  );
}
