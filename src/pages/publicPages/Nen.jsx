import React from "react";
import { Tabs } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const Nen = () => {
 // Sample data for News, Events, and Notices
 const newsData = [
  {
    id: 1,
    title: "New Scholarship Program Announced",
    date: "2023-10-10",
    description: "The university has announced a new scholarship program for deserving students.",
  },
  {
    id: 2,
    title: "Campus Renovation Completed",
    date: "2023-10-05",
    description: "The renovation of the main campus building has been successfully completed.",
  },
];

const eventsData = [
  {
    id: 1,
    title: "Annual Cultural Fest",
    date: "2023-11-15",
    description: "Join us for the annual cultural fest featuring music, dance, and food stalls.",
  },
  {
    id: 2,
    title: "Tech Symposium 2023",
    date: "2023-12-01",
    description: "A symposium showcasing the latest advancements in technology and innovation.",
  },
];

const noticesData = [
  {
    id: 1,
    title: "Holiday Notice",
    date: "2023-10-20",
    description: "The university will remain closed on 20th October for a public holiday.",
    fileUrl: "https://example.com/notices/holiday-notice.pdf", // Link to the notice file
  },
  {
    id: 2,
    title: "Exam Schedule Released",
    date: "2023-10-25",
    description: "The exam schedule for the fall semester has been released. Check the website for details.",
    fileUrl: "https://example.com/notices/exam-schedule.pdf", // Link to the notice file
  },
];

return (
  <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">News, Events & Notices</h1>

      {/* Tabs for News, Events, and Notices */}
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="News" key="1">
          <div className="space-y-4">
            {newsData.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-500 text-sm">{item.date}</p>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </TabPane>

        <TabPane tab="Events" key="2">
          <div className="space-y-4">
            {eventsData.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-500 text-sm">{item.date}</p>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </TabPane>

        <TabPane tab="Notices" key="3">
          <div className="space-y-4">
            {noticesData.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-gray-500 text-sm">{item.date}</p>
                    <p className="text-gray-700 mt-2">{item.description}</p>
                  </div>
                  {/* Download Button */}
                  {item.fileUrl && (
                    <a
                      href={item.fileUrl}
                      download
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <DownloadOutlined className="text-2xl" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
);
};


export default Nen;