import { Menu } from "antd";
import { 
    DashboardOutlined, 
    AppstoreOutlined,
    ShoppingOutlined 
} from '@ant-design/icons';
import { Link, useLocation } from "react-router-dom";

function MenuSider () {
    const location = useLocation();
    let path = location.pathname;
    
    if (path === "/admin") {
        path = "/admin/dashboard";
    }
    
    const items = [
        {
            key: '/admin/dashboard',
            icon: <DashboardOutlined />,
            label: <Link to={"/admin/dashboard"}>Thống kê</Link>
        },
        {
            key: '/admin/categories',
            icon: <AppstoreOutlined />, 
            label: <Link to={"/admin/categories"}>Quản lý danh mục</Link>,
        },
        {
            key: '/admin/products',
            icon: <ShoppingOutlined />,
            label: <Link to={"/admin/products"}>Quản lý sản phẩm</Link>,
        },
        // {
        //     key: '/admin/settings',
        //     icon: <SettingOutlined />,
        //     label: <Link to={"/admin/settings"}>Cài đặt chung</Link>,
        // },
    ];

    return (
        <>
            <Menu
                // Sử dụng selectedKeys thay vì defaultSelectedKeys để menu luôn sáng đúng tab khi chuyển trang hoặc F5
                selectedKeys={[path]}
                mode="inline"
                items={items}
                style={{ height: '100%', borderRight: 0 }} 
            />
        </>
    )
}

export default MenuSider;