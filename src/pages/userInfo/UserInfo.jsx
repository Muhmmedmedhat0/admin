import './userInfo.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { updateUser } from '../../store/userSlice';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
function UserInfo() {
  const dispatch = useDispatch();
  // display curent user info from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  const userName = useRef(null);
  const userEmail = useRef(null);
  const userAge = useRef(null);
  const userStatus = useRef(null);
  // 
  const handleUpdate = () => {
    const user = {
      name: userName.current.value,
      email: userEmail.current.value,
      age: userAge.current.value,
      status: userStatus.current.value
    }
    dispatch(updateUser(user));

  };
  return (
    <div className='single-Page'>
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className="top">
          <div className="top-left">
            <div className="edit-btn">Edit</div>
            <h1 className="top-left-title">Information</h1>
            <div className="top-left-content">
              <img
                src={user.img}
                alt="" className="content-img" />
              <div className="content-details">
                <h2 className="user-title"><input ref={userName} className="user-value" type="text" placeholder={user.username} /></h2>
                <div className="user-description">
                  <label ref={userEmail} className="user-key" htmlFor="email">Email: </label>
                  <input className="user-value" type="email" placeholder={user.email} />
                </div>
                <div className="user-description">
                  <label ref={userAge} className="user-key" htmlFor="age">Age: </label>
                  <input className="user-value" type="number" placeholder={user.age} />
                </div>
                <div className="user-description">
                  <label ref={userStatus} className="user-key" htmlFor="status">Status: </label>
                  <input className="user-value" type="text" placeholder={user.status} />
                </div>
              </div>
              <div className="update-btn"><button onClick={(e) => { handleUpdate(e) }}>update</button></div>
            </div>
          </div>
          <div className="top-right">
            <Chart aspect={4 / 1} title='User last 6 Month Operations' />
          </div>
        </div>
        <div className="bottom">
          <h1 className="bottom-title">last Transactions</h1>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default UserInfo;