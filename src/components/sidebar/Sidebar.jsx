import './sidebar.scss';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{ textDecoration: `none` }}>
          <span className="logo">Admin-App</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link to="/" style={{ textDecoration: `none` }}>
            <li><DashboardIcon className="icon" /><span>Dashboard</span></li>
          </Link>
          <p className="title">Lists</p>
          <Link to="/users" style={{ textDecoration: `none` }}>
            <li><PersonIcon className="icon" /><span>Users</span></li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li><InventoryIcon className="icon" /><span>Products</span></li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li><RequestPageIcon className="icon" /><span>Orders</span></li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li><LocalShippingIcon className="icon" /><span>Delivery</span></li>
          </Link>
          <p className="title">Useful Links</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li><BarChartIcon className="icon" /><span>Stats</span></li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li><NotificationsActiveIcon className="icon" /><span>Notifications</span></li>
          </Link>
          <p className="title">Services</p>
          <Link to="/" style={{ textDecoration: `none` }}>
            <li><HealthAndSafetyIcon className="icon" /><span>System Health</span></li>
          </Link>
          <Link to="/" style={{ textDecoration: `none` }}>
            <li><VpnKeyIcon className="icon" /><span>Logs</span></li>
          </Link>
          <Link to="/" style={{ textDecoration: `none` }}>
            <li><SettingsIcon className="icon" /><span>Setting</span></li>
          </Link>
          <p className="title">User</p>
          <Link to="/" style={{ textDecoration: `none` }}>
          </Link>
          <li><ManageAccountsIcon className="icon" /><span>Profile</span></li>
          <li><ExitToAppIcon className="icon" /><span>Logout</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;