import { Layout, ConfigProvider, theme as antdTheme } from "antd";
import './LayoutAdmin.scss';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useState, useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import MenuSider from "../../components/MenuSider";
import { Outlet } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";

// Tách các component con từ Layout của Ant Design
const { Header, Sider, Content } = Layout;

function LayoutAdmin() {
    const [collapse, setCollapse] = useState(false);
    const { theme } = useContext(ThemeContext);

    return (
        <ConfigProvider
            theme={{
                algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm
            }}
        >
            <Layout className="layout-default" style={{ minHeight: '100vh' }}>
                <Header className="header-admin" style={{ background: 'transparent' }}>
                    <div className={"header-admin__logo " + (collapse ? "header-admin__logo--collapse" : "")}>
                        <div className="header-admin__logo__image">
                            <h4>Thang Hoa</h4>
                        </div>
                    </div>
                    <div className="header-admin__nav">
                        <div className="header-admin__collapse" onClick={() => setCollapse(!collapse)}>
                            {collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </div>
                        <div>
                            <ThemeToggle />
                        </div>
                    </div>
                </Header>

                <Layout>
                    <Sider theme={theme} className="sider" collapsed={collapse}>
                        <MenuSider />
                    </Sider>
                    <Content className="content-admin">
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
}

export default LayoutAdmin;