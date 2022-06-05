import './widget.scss';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
function Widget({ type }) {
  let data;
  // temporrary data
  const amount = 1000;
  const percent = 20;
  if (type === `users`) {
    data = {
      title: `Users`,
      isMoney: false,
      link: `see all users`,
      icon: <PersonOutlinedIcon className='icon' style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)", }} />,
    }
  } else if (type === `orders`) {
    data = {
      title: `Orders`,
      isMoney: false,
      link: `View all orders`,
      icon: <ShoppingCartOutlinedIcon className='icon' style={{ backgroundColor: "rgba(218, 165, 32, 0.2)", color: "goldenrod", }} />,
    }
  } else if (type === `earning`) {
    data = {
      title: `Earning`,
      isMoney: true,
      link: `View all earning`,
      icon: <MonetizationOnOutlinedIcon className='icon' style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />,
    }
  } else {
    data = {
      title: `Balance`,
      isMoney: true,
      link: `See deatails`,
      icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{ backgroundColor: "rgba(128, 0, 128, 0.2)", color: "purple", }} />,
    }
  }
  return (
    <div className='widget'>
      <div className="left">
        <div className="widget-title">{data.title}</div>
        <div className="widget-value">{data.isMoney && `$`}{amount}</div>
        <div className="wiget-link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {percent} %
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;