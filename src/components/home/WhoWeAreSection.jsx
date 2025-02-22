import React from 'react';
import { Row, Col, Avatar, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Text } = Typography;

const WhoWeAreSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
    <Row gutter={[32, 32]} className="items-center">
      {/* Left Column */}
      <Col xs={24} md={12} className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Title level={2} className="text-center font-bold text-4xl font-Poppins text-gray-800">
            Who We Are
          </Title>
          <p className="text-lg text-gray-600 leading-relaxed">
            Sustainable Research and Consultancy Limited (SRCL) is an independent, multidisciplinary consulting firm
            established by a group of highly qualified and dedicated experts in development interventions. Incorporated
            under the Companies Act of Bangladesh, SRCL began its journey in 2014.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            The company prides itself on being a dynamic partner, delivering appropriate, sustainable solutions for
            infrastructure development through innovative ideas, capacity building, and training. SRCL offers
            comprehensive services, supporting projects from inception to completion. With a focus on meeting the
            needs of clients and society, SRCL has expanded its activities across diverse fields to enhance its
            expertise and capabilities.
          </p>
        </motion.div>
      </Col>

      {/* Right Column */}
      <Col xs={24} md={12}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Title level={2} className="text-center text-4xl font-semibold text-gray-800">Messages</Title>
        </motion.div>

        <div className="space-y-6 mt-6">
          {[ 
            {
              name: "Nazmul Ahsan",
              title: "Secretary, Ministry of Water Resources and Chairperson of CEGIS Board of Trustees",
              message: "Under preparation ...",
              avatar: "https://via.placeholder.com/150",
            },
            {
              name: "Malik Fida A Khan",
              title: "Executive Director, CEGIS",
              message:
                "Protection of Environment through sustainable conservation and management of natural resources are important contemporary issues as prevailing environmental problems have...",
              avatar: "https://via.placeholder.com/150",
            },
          ].map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="flex items-center bg-white shadow-lg rounded-lg p-6"
            >
              <Avatar src={person.avatar} className="w-16 h-16" size={104} />
              <div className="ml-6 flex-1">
                <Text strong className="text-lg text-gray-900">{person.name}</Text> <MailOutlined className="text-gray-500 ml-2" />
                <br />
                <Text type="secondary" className="text-gray-600 text-sm">{person.title}</Text>
                <br />
                <Text className="text-gray-700 text-sm">
                  {person.message} <a href="#" className="text-blue-500 hover:text-blue-700">Read More</a>
                </Text>
              </div>
            </motion.div>
          ))}
        </div>
      </Col>
    </Row>
  </div>
  );
};

export default WhoWeAreSection;