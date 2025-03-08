import React, { useState } from "react";
import { Row, Col, Avatar, Typography } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Fade, Slide } from "react-awesome-reveal";

const { Title, Text } = Typography;

const WhoWeAreSection = () => {
  const [readMore, setReadMore] = useState(null);
   const [ titleReadMore, setTitleReadMore] = useState(false)

  //
  return (
    <div className="w-11/12 mx-auto py-12 font-roboto">
      <div className="flex justify-between items-start gap-x-16 flex-wrap md:flex-nowrap">
        {/* Left Column */}
          <div>
            <Title>
               <h1 className="text-center font-bold text-5xl font-Varela text-gray-800 capitalize"> Who We Are</h1>
            </Title>
            <Slide direction="left" duration={1500}>
              <p className="text-base text-gray-600 leading-relaxed font-Varela mb-2 text-justify">
                Sustainable Research and Consultancy Ltd. (SRCL) is a
                combination of some multiple business enterprises like
                construction consultancy, feasibility study, EIA, building
                construction, and ICT. This group stepped into the business
                world in the name of SRCL in 2015 with research project
                management from Abroad University business. The success of this
                enterprise prompted us to undertake new business activities in
                order to achieve our vision for consulting and construction.
              </p>
              <p className="text-base text-gray-600 leading-relaxed font-Varela mb-2 text-justify">
                Keeping pace with the changing business world, this group
                flourished into a blooming group of business organizations with
                the help of the dynamic leadership of its board of directors and
                the sincere, honest, and dedicated efforts of the executives and
                the staff of its different business enterprises through
                efficient management <span className={`${!titleReadMore?"inline-block":"hidden"}`}>... <span onClick={()=>setTitleReadMore(!titleReadMore)} className="cursor-pointer text-blue-600">readmore</span></span>
              </p>
               {titleReadMore &&
                <>
                 <p className="text-base text-gray-600 leading-relaxed font-Varela mb-2 text-justify">
                  Different Retried Govt. High Officials working as advisors and
                  young energetic, educated people are working as core team
                  members in this group. This group has Seven (7) sister concerns
                  which deal with Consultancy, NGO, Supply, agrobusiness, ICT,
                  real estate, support services, communication development, etc.
                </p>
                <p className="text-base text-gray-600 leading-relaxed font-Varela mb-2 text-justify">
                  Before bidding farewell to the present turbulent years, we hope
                  to accept the challenge of the new century, where our group
                  expects to contribute a lot towards the economic development of
                  the country through its patriotic zeal and hard work.
                </p>
                </>
               }
            </Slide>
          </div>
      

        {/* Right Column */}
        <Col xs={24} md={12}>
          <div>
            <Title
              level={1}>
              <h1 className="text-center font-bold text-5xl font-Varela text-gray-800 capitalize pb-8">Messages</h1>
            </Title>
          </div>

          <div className="space-y-6 mt-6 font-roboto">
            {[
              {
                name: "Jubaida Akhter",
                title: "Chairman Of SRCL",
                message:
                  " My sincere gratitude to the Almighty Allah for His endless Mercy for providing us with the opportunity to serve humanity in Bangladesh through Sustainable Research and Consultancy Ltd. (SRCL). We tried to deploy our efforts and endeavors to attain the Sustainable Development Goals (SDG) in Bangladesh with a view to making a sustainable and poverty-free society. Since its inception in 2012, SRCL is committed to achieving long-term, sustainable changes in the lives of the most marginalized and deprived communities in Bangladesh. SAWAB is a genuinely humanitarian and philanthropic organization that actively participates in national development programs. In 2019, we implemented welfare and development programs covering many beneficiaries, including poor people in Bangladesh.",
                avatar: "https://i.ibb.co.com/fYStHwjg/chairman.png",
              },
              {
                name: "Abu Jubayer",
                title: "Managing Director Of SRCL",
                message:
                  "Protection of Environment through sustainable conservation and management of natural resources are important contemporary issues as prevailing environmental problems have...",
                avatar: "https://i.ibb.co.com/bjZnkdhC/director.png",
              },
            ].map((person, index) => (
              <Slide key={index + 1} duration={1500} direction="right">
                <div
                  key={index + 1}
                  className="flex items-start justify-between bg-white shadow-lg rounded-lg p-6 mb-10"
                >
                  <div className="mx-auto ">
                    <img
                      className="rounded-lg float-left w-36 h-36 absolute -left-6 -top-6 object-cover shadow-2xl circle-shape"
                      src={person.avatar}
                      alt="Person image"
                      
                    />
                  </div>
                  <div className="ml-6 pl-24 flex-1">
                    <Text strong className="text-xl text-gray-900">
                      <span className="font-Varela text-lg">{person.name}</span>
                    </Text>{" "}
                    <MailOutlined className="text-gray-500 ml-2" />
                    <br />
                    <Text type="secondary" className="text-gray-600 text-sm text-justify">
                      {person.title}
                    </Text>
                    <br />
                    <Text className="text-gray-700 text-sm font-roboto text-justify">
                      {readMore === person.name ? (
                        <>
                          <p className="text-justify">{person.message}</p>
                          <a
                            onClick={() => setReadMore(null)}
                            className="text-blue-500 hover:text-blue-700 cursor-pointer ml-2"
                          >
                            Read Less
                          </a>
                        </>
                      ) : (
                        <>
                          {person.message.substring(0, 80)}...
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
                </div>
              </Slide>
            ))}
          </div>
        </Col>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
