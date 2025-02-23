import React, { useState } from 'react';
import { Row, Col, Avatar, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Text } = Typography;

const WhoWeAreSection = () => {
 const [readMore,setReadMore] = useState(null)



  // 
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 font-roboto">
    <Row gutter={[32, 32]} className="items-start">
      {/* Left Column */}
      <Col xs={24} md={12} className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Title level={1} className="text-center font-bold text-5xl font-roboto text-gray-800 capitalize">
             Who We Are
          </Title>
          <p className="text-lg text-gray-600 leading-relaxed font-Albert">
            Sustainable Research and Consultancy Limited (SRCL) is an independent, multidisciplinary consulting firm
            established by a group of highly qualified and dedicated experts in development interventions. Incorporated
            under the Companies Act of Bangladesh, SRCL began its journey in 2014.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed font-roboto">
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
          <Title level={1} className="text-center text-5xl font-semibold text-gray-800">Messages</Title>
        </motion.div>

        <div className="space-y-6 mt-6 font-roboto">
          {[ 
            {
              name: "Jubaida Akhter",
              title: "Chairman Of Srcl",
              message: " My sincere gratitude to the Almighty Allah for His endless Mercy for providing us with the opportunity to serve humanity in Bangladesh through Sustainable Research and Consultancy Ltd. (SRCL). We tried to deploy our efforts and endeavors to attain the Sustainable Development Goals (SDG) in Bangladesh with a view to making a sustainable and poverty-free society. Since its inception in 2012, SRCL is committed to achieving long-term, sustainable changes in the lives of the most marginalized and deprived communities in Bangladesh. SAWAB is a genuinely humanitarian and philanthropic organization that actively participates in national development programs. In 2019, we implemented welfare and development programs covering many beneficiaries, including poor people in Bangladesh.",
              avatar: "https://i.ibb.co.com/fYStHwjg/chairman.png",
            },
            {
              name: "Abu Jubayer",
              title: "Managing Director Of Srcl",
              message:
                "Protection of Environment through sustainable conservation and management of natural resources are important contemporary issues as prevailing environmental problems have...",
              avatar:  "https://i.ibb.co.com/bjZnkdhC/director.png",
            },
          ].map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="flex items-start bg-white shadow-lg rounded-lg p-6"
            >
              <Avatar src={person.avatar} className="w-16 h-16" size={104} />
              <div className="ml-6 flex-1">
                <Text strong className="text-xl text-gray-900"><span className='font-Varela text-lg'>{person.name}</span></Text> <MailOutlined className="text-gray-500 ml-2" />
                <br />
                <Text type="secondary" className="text-gray-600 text-sm ">{person.title}</Text>
                <br />
                <Text className="text-gray-700 text-sm font-roboto">

                {readMore === person.name ? (
                    <>
                      {person.message}
                      <a
                        onClick={() => setReadMore(null)}
                        className="text-blue-500 hover:text-blue-700 cursor-pointer ml-2"
                      >
                        Read Less
                      </a>
                    </>
                  ) : (
                    <>
                      {person.message.substring(0, 100)}...
                      <a
                        onClick={() => setReadMore(person.name)}
                        className="text-blue-500 hover:text-blue-700 cursor-pointer ml-2"
                      >
                        Read More
                      </a>
                    </>
                  )}

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