import { Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Link, Outlet } from "react-router";



// ** resourse components
const Resources = () => {

  // 
  return (
    <div>
         <Layout className="min-h-screen pb-16 pt-1">
        {/* Sider (Sidebar) */}
        <Sider
          breakpoint="lg" // Collapses the Sider on screens smaller than 992px
          collapsedWidth="0" // Hides the Sider completely when collapsed
          theme="light"
          width={300}
          className="shadow-lg rounded-lg pt-1"
        >
          <Menu mode="inline" defaultSelectedKeys={["survey"]}>
            <Menu.Item key="survey">
              <Link
                className="font-Varela font-semibold capitalize"
                to={"/resources/survey-equipment"}
              >
                survey equipment
              </Link>
            </Menu.Item>
            <Menu.Item key="testing">
              <Link
                className="font-Varela font-semibold capitalize"
                to={"/resources/testing-instrument"}
              >
                 Testing Instrument
              </Link>
            </Menu.Item>
            <Menu.Item key="computer">
              <Link
                className="font-Varela font-semibold capitalize"
                to={"/resources/it-equipment"}
              >
                 Computer Hardware
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>

        {/* Content Area */}
        <Layout>
          <Content className="p-6 bg-gray-100">
            <Outlet /> {/* Renders nested routes */}
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Resources