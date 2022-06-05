import './new.scss';
import { useState, useRef } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useDispatch } from 'react-redux';
import { insertUser } from '../../store/userSlice';

function New({ title }) {
  const username = useRef(null);
  const age = useRef(null);
  const email = useRef(null);
  const status = useRef(null);
  // const image = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      // console.log(image.current.files[0]);
      username: username.current.value,
      age: age.current.value,
      email: email.current.value,
      status: status.current.value,
    }
    dispatch(insertUser(userData))
    // empty the input fields after submit
    username.current.value = null
    age.current.value = null
    email.current.value = null
    status.current.value = null
  };
  const [img, setImg] = useState('');
  return (
    <div className="new">
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className="top">
          <h2 className="top-title">{title}</h2>
        </div>
        <div className="bottom">
          <div className="bottom-left">
            <img src={
              img ? URL.createObjectURL(img) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt="" />
          </div>
          <div className="bottom-right">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor='username'>username</label>
                <input id='username' type="text" ref={username} />
              </div>
              <div className="form-group">
                <label htmlFor='age'>age</label>
                <input id='age' type="number" ref={age} />
              </div>
              <div className="form-group">
                <label htmlFor='email'>email</label>
                <input id='email' type="email" ref={email} />
              </div>
              <div className="form-group">
                <label htmlFor='status'>status</label>
                <input id='status' type="text" ref={status} />
              </div>
              <div className="form-group">
                <label htmlFor='file'>
                  image<DriveFolderUploadOutlinedIcon className='icon' />
                </label>
                <input id='file' type="file" onChange={(e) => { setImg(e.target.files[0]) }} style={{ display: `none` }} />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New;