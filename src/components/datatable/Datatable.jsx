import "./datatable.scss";
import { Link } from "react-router-dom";
import { deleteUser } from '../../store/userSlice';
import { useDispatch } from 'react-redux';
const Datatable = ({ isLoading, users }) => {
  const dispatch = useDispatch();

  const usersList = users && users.map((user) => {
    return (
      <tr key={user.id}>
        <th scope="row">{user.id}</th>
        <td>{user.username}</td>
        <td className="cellWithImg"><img src={user.img} className="cellImg" alt="" /></td>
        <td>{user.email}</td>
        <td>{user.age}</td>
        <td className={`cellWithStatus ${user.status}`}>{user.status}</td>
        <td className="cellAction">
          <Link onClick={() => { localStorage.setItem('user', JSON.stringify(user)) }} to={`/users/${user.id}`} style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div></Link>
          <div onClick={() => { dispatch(deleteUser(user.id)) }} className="deleteButton">Delete</div>
        </td>
      </tr >
    );
  });
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">Add New</Link>
      </div>
      {isLoading ? 'Loading...' :
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">First Name</th>
                <th scope="col"></th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {usersList.length > 0 ? usersList
                : <tr className="alert alert-danger" role="alert">
                  <td colSpan="7">No users found</td></tr>}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default Datatable;