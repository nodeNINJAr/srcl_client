import { Card } from "antd";
import {
  SmileOutlined,
  TrophyOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Fade } from "react-awesome-reveal";
import CountUp from 'react-countup';
import Heading from "../shared/heading/Heading";

const stats = [
  {
    id: 1,
    value: "10",
    label: "Years of Experience",
    icon: <ClockCircleOutlined className="text-green-500 text-4xl" />,
  },
  {
    id: 2,
    value: "199",
    label: "Completed Projects",
    icon: <CheckCircleOutlined className="text-green-500 text-4xl" />,
  },
  {
    id: 3,
    value: "114",
    label: "Awards Winning",
    icon: <TrophyOutlined className="text-green-500 text-4xl" />,
  },
  {
    id: 4,
    value: "1350",
    label: "Happy Customers",
    icon: <SmileOutlined className="text-green-500 text-4xl" />,
  },
];

// const formatter = (value) => <CountUp end={value} separator="," />;
export default function StatsSection() {
  return (
    <div className="pb-10">
      <div className="w-11/12 mx-auto">
         <Heading title1={"At a Glance:"} title2={'Our Impact'}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Fade duration={1500} direction="up" key={stat?.id}>
              <Card key={stat.id} className="text-center shadow-md">
                <div className="flex flex-col items-center space-y-2 py-8">
                  {stat.icon}
                    <CountUp
                     className="text-2xl font-Poppins font-semibold"
                     start={0}
                     end={stat?.value}
                     duration={5}
                    >
                    </CountUp>
                  <p className="text-gray-500 font-medium">{stat.label}</p>
                </div>
              </Card>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
