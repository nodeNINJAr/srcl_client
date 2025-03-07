import { Layout, Menu } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { Link, Outlet } from 'react-router'

// 
const AllProjects = () => {
  // 
  return (
    <Layout className="min-h-screen pb-16 pt-1">
      {/* Sider (Sidebar) */}
      <Sider
        breakpoint="lg" // Collapses the Sider on screens smaller than 992px
        collapsedWidth="0" // Hides the Sider completely when collapsed
        theme="light"
        width={300}
        className="shadow-lg rounded-lg pt-1"
      >
        <Menu mode="inline" defaultSelectedKeys={["completed"]}>
          <Menu.Item key="ongoing">
            <Link className="font-Varela font-semibold" to={"/projects/all-projects/ongoing"}>
              Ongoing Projects
            </Link>
          </Menu.Item>
          <Menu.Item key="completed">
            <Link className="font-Varela font-semibold" to={"/projects/all-projects/completed"}>
              Completed Projects
            </Link>
          </Menu.Item>
          <Menu.Item key="yearwise">
            <Link className="font-Varela font-semibold" to={"/projects/all-projects/year-wise"}>
              Yearwise Projects
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
  )
}

export default AllProjects