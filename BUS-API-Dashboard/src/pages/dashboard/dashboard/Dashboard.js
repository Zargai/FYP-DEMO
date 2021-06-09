import { Statistic, Card, Row, Col,message } from 'antd';
import { TeamOutlined, HomeOutlined,EnvironmentOutlined,UsergroupAddOutlined,CarOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import {Admin } from '../../../services/api'
import '../../../App.css'
import numl from '../../../numl.jpg'



function Dashboard() {


  const [statistics, setStatistics] = useState();
  const [mounted, setMounted] = useState(true);


  const getStatistics = async () => {
    try {

      const response = await Admin.getStatistics();
      const newResponse = response.data;
      console.log("newResponse", newResponse);
      setStatistics(newResponse);
      console.log(response.data);
    } catch (error) {
      message.error(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (mounted === true) {
      getStatistics();
      console.log('statis', statistics);
    }
    return () => {
      setMounted(false);
    };
  }, [setMounted]);


  return (
    
    <div style={{
          //  backgroundImage:`url(${numl})`,
          //   backgroundSize:"cover",
          //   backgroundPosition:"center",
          //   height:"80vh",
        padding: '10px',
        margin :'0px',
        textAlign:'center'
    }}>
      <h2 style={{padding:"10px 0px",fontWeight:"bold", backgroundColor:'rgba(0, 0, 0, 0.9)',color:'white'}}>
        Dashboard</h2>

    <Row gutter={16}>
      <Col span={12}>
        <Card style={{backgroundColor:"rgba(0, 0, 0, 0.9)"}}>
          <h5 style={{color:"white"}}>Total Students</h5>
          <Statistic
            value={statistics?.students || ''}
            valueStyle={{ color: '#3f8600' }}
            prefix={<TeamOutlined />}
            
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card style={{backgroundColor:"rgba(0, 0, 0, 0.9)"}}>
        <h5 style={{color:"white"}}>Total Drivers</h5>
          <Statistic
            value={statistics?.drivers}
            
            valueStyle={{ color: '#3f8600' }}
            prefix={<UsergroupAddOutlined />}
            
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card style={{backgroundColor:"rgba(0, 0, 0, 0.9)"}}>
        <h5 style={{color:"white"}}>Total Buses</h5>
          <Statistic

            value={statistics?.buses}
            
            valueStyle={{ color: '#3f8600' }}
            prefix={<CarOutlined />}
            
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card style={{backgroundColor:"rgba(0, 0, 0, 0.9)"}}>
        <h5 style={{color:"white"}}>Total Routes</h5>
          <Statistic
            value={statistics?.routes}
            
            valueStyle={{ color: '#3f8600' }}
            prefix={<EnvironmentOutlined />}
            
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card style={{backgroundColor:"rgba(0, 0, 0, 0.9)"}}>
        <h5 style={{color:"white"}}>Total Departments</h5>
          <Statistic

            value={statistics?.departments}
            
            valueStyle={{ color: '#cf1322' }}
            prefix={<HomeOutlined />}
            
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card style={{backgroundColor:"rgba(0, 0, 0, 0.9)"}}>
        <h5 style={{color:"white"}}>Support Tickets</h5>
          <Statistic
 
            value={statistics?.supports}
            
            valueStyle={{ color: '#cf1322' }}
            prefix={<HomeOutlined />}
            
          />
        </Card>
      </Col>
    </Row>
  </div>
  );
}

export default Dashboard;
