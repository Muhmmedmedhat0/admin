import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featurdChart/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';

function Home() {
  
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget type='users' />
          <Widget type='orders' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>
        <div className="charts">
          <Featured />
          <Chart title='Last 6 Month Transactions' aspect={2/1}/>
        </div>
        <div className="list-container">
          <div className="list-header">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;