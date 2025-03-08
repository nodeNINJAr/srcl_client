import React from 'react';
import { Layout, Typography, Button, Row, Col } from 'antd';
import { MailOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, PhoneOutlined } from '@ant-design/icons';
import './Header.css'; // Custom styles if needed

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
    <AntHeader className="header">
      <Row justify="space-between" align="middle" style={{ height: '100%' }}>
        <Col>
          <Title level={3} className="header-title ">
            Sustainable Research And Consultancy Limited <br/>
            <span className='text-lg font-medium capitalize pb-4 block text-end'>Sustailable for future</span>
          </Title>
        </Col>
        <Col>
          <div className="header-actions">
            <Button type="link" href="#contact" className="header-action">
            <PhoneOutlined className="header-icon" />
              Contact Us
            </Button>
            <Button type="link" href="#webmail" className="header-action">
            <MailOutlined className="header-icon" />
              Webmail
            </Button>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FacebookOutlined className="social-icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <TwitterOutlined className="social-icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <InstagramOutlined className="social-icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <LinkedinOutlined className="social-icon" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </AntHeader>
  );
};

export default AppHeader;