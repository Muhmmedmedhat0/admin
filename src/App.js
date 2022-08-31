import Topbar from './components/topbar/Topbar';
import './App.css';

import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/login';

function App() {
  const ADMIN =
    JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)?.userInfo
      .isAdmin || false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route index exact path="/" element={<Home />} />
        {ADMIN && <Route path="/users" element={<UserList />} />}
        {ADMIN && <Route path="/user/:id" element={<User />} />}
        {ADMIN && <Route path="/newUser" element={<NewUser />} />}
        {ADMIN && <Route path="/products" element={<ProductList />} />}
        {ADMIN && <Route path="/product/:id" element={<Product />} />}
        {ADMIN && <Route path="/newproduct" element={<NewProduct />} />}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
