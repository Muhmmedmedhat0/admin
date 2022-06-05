import './featuerd.scss';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";




function Featured() {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenu</h1>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text='70%' strokeWidth={3} />
        </div>
        <p className="title">Total Sales Mad Today</p>
        <p className="value">$50,000</p>
        <p className="desc">Previous transactions processing. Last payments may not be included.</p>
        <div className="summery">
          <div className="item">
            <div className="item-title">Last week</div>
            <div className="item-result positive">
              < KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className="result-amount">$12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last month</div>
            <div className="item-result negative">
              < KeyboardArrowDownIcon fontSize='small' />
              <div className="result-amount">$12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Target</div>
            <div className="item-result positive">
              < KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className="result-amount">$12.4K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;