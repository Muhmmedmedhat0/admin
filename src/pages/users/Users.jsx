import './users.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';



function Users({ users, isLoading }) {
  

  return (
    <div className='users'>
      <Sidebar />
      <div className="users-container">
        <Navbar />
        <Datatable isLoading={isLoading} users={users} />
      </div>
    </div>
  );
}

export default Users;