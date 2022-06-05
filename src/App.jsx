import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Users from './pages/users/Users';
import UserInfo from './pages/userInfo/UserInfo';
import New from './pages/new/New';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../src/store/userSlice';


function App() {
  // 6. Dispatch the action to get the users
  const dispatch = useDispatch();
  useEffect(() => {
    // args id is the payload we send it for the action
    dispatch(getUsers({ id: 1 }));
  }, [dispatch]);
  // 7. Get the users from the store
  const { isLoading, users } = useSelector((state) => state.users);
  // console.log(users);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<Users isLoading={isLoading} users={users} />} />
              <Route path=':userId' element={<UserInfo users={users} />} />
              <Route path='new' element={<New title='Add New User' />} />
            </Route>
            <Route path='/'>
              <Route index element={<Users />} />
              <Route path=':productId' element={<UserInfo />} />
              <Route path='new' element={<New title='Add New Product' />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
