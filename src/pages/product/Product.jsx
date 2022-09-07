import { Link, useLocation } from 'react-router-dom';
import './product.css';
import Chart from '../../components/chart/Chart';
import { Publish } from '@material-ui/icons';
import Sidebar from '../../components/sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useMemo, useEffect } from 'react';

import { updateProduct } from '../../app/slices/products';

export default function Product() {
  const location = useLocation();
  const _id = location.pathname.split('/')[2];
  const { products } = useSelector((state) => state.products);
  const product =products && products.find((product) => product._id === _id);

  const [productStats, setProductStats] = useState([]);
  const MONTHS = useMemo(() => ['Jan','Feb','Mar','Apr','May','Jun','Jul','Agu','Sep','Oct','Nov','Dec',],[]);
  const user = JSON.parse(sessionStorage?.getItem('persist:user'))?.userInfo;
  const currentUser = user && JSON.parse(user);
  const TOKEN = currentUser?.token;
// .preventDefault();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const values = {
    title,desc,_id
  }
  function handleUpdate(e) {
    e.preventDefault();
    dispatch(updateProduct(values));
}

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await
          fetch(`http://localhost:8080/api/users/status?id=${_id}`, {
          method: 'GET',
          headers: { Authorization: `Bearer ${TOKEN}` },
        });
        const data = await response.json();
        data.users &&
          data.users.map((item) =>
            setProductStats((prev) => [
              ...prev,
              { name: MONTHS[item._id - 1], Sales: item.total * 100 },
            ])
          );
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS, TOKEN, _id]);

  return (
    <div className="container">
      <Sidebar />
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">{product.title}</h1>
          <Link to="/newproduct">
            <button className="productAddButton">Create</button>
          </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart
              data={productStats.slice(0, 2)}
              dataKey="Sales"
              title="Sales Performance"
            />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img
                src={product.img}
                alt={product.title}
                className="productInfoImg"
              />
              <span className="productName">{product.title}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue"> &nbsp;{product._id}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">sales:</span>
                <span className="productInfoValue">5123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoValue">{product?.inStock}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>Product Name</label>
              <input
                type="text"
                name="title"
                placeholder={product.title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>Product Description</label>
              <input
                type="text"
                name="description"
                placeholder={product.description}
                onChange={(e) => setDesc(e.target.value)}
              />
              <label>Price</label>
              <input type="text" placeholder={product.price} />
              <label>In Stock</label>
              <select name="inStock" id="idStock">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img
                  src={product.img}
                  alt={product.title}
                  className="productUploadImg"
                />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button
                onClick={(e) => {
                  handleUpdate(e);
                }}
                className="productButton"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
