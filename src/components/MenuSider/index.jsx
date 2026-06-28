import { Menu } from "antd";
import { 
    DashboardOutlined, 
    AppstoreOutlined,
    ShoppingOutlined 
} from '@ant-design/icons';
import { useLocation, useNavigate } from "react-router-dom"; // Dùng useNavigate thay cho Link
import { useState, useEffect } from "react";

function MenuSider() {
    const location = useLocation();
    const navigate = useNavigate(); // Hook chuyên dùng để chuyển trang trong React Router
    let path = location.pathname;

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
        const handleResize = () => {
            const currentIsMobile = window.innerWidth <= 480;
            setIsMobile((prev) => {
                if (prev !== currentIsMobile) return currentIsMobile;
                return prev;
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (path === "/admin") {
        path = "/admin/dashboard";
    }

    const items = [
        {
            key: '/admin/dashboard',
            icon: <DashboardOutlined />,
            // Luôn giữ chữ ở đây, việc ẩn chữ trên mobile chúng ta đã cấu hình bằng CSS (.ant-menu-title-content { display: none; }) ở bước trước rồi!
            label: "Thống kê", 
            title: "Thống kê"
        },
        {
            key: '/admin/categories',
            icon: <AppstoreOutlined />, 
            label: "Danh mục",
            title: "Quản lý danh mục"
        },
        {
            key: '/admin/products',
            icon: <ShoppingOutlined />,
            label: "Sản phẩm",
            title: "Quản lý sản phẩm"
        },
    ];

    // Hàm xử lý khi bấm vào bất kỳ vị trí nào (kể cả icon) trên thanh menu
    const handleMenuClick = (e) => {
        navigate(e.key); // Chuyển trang đến đúng đường dẫn 'key' của item đó
    };

    return (
        <Menu
            selectedKeys={[path]}
            mode={isMobile ? "horizontal" : "inline"}
            items={items}
            onClick={handleMenuClick} // Thêm sự kiện click thông minh vào đây
            disabledOverflow={true}
            className="dynamic-admin-menu"
            style={{ height: '100%', borderRight: 0 }}
        />
    )
}

export default MenuSider;