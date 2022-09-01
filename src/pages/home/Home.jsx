import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import Sidebar from '../../components/sidebar/Sidebar';
import { useState, useEffect, useMemo } from 'react';

export default function Home() {
  const [userStats, setUserStats] = useState([]);
  const TOKEN =
    JSON.parse(JSON.parse(localStorage?.getItem('persist:root')).user)?.userInfo?.token || null;
  const MONTHS = useMemo(() => ['Jan','Feb','Mar','Apr','May','Jun','Jul','Agu','Sep','Oct','Nov','Dec'],[]);
  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/users//status',{
            method: 'GET', headers: { Authorization: `Bearer ${TOKEN}` },
          });
        const data = await response.json();
        data.users && data.users.map((item) =>
          setUserStats((prev) => [...prev, { name: MONTHS[item._id - 1], 'Active User': item.total },]));
      } catch (error) {console.log(error)}
    };
    getStats();
  }, [MONTHS, TOKEN]);
  return (
    <div className="container">
      <Sidebar />
      <div className="home">
        <FeaturedInfo />
        <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </div>
  );
}
