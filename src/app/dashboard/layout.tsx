import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import style from '../ui/dashboard/dashboard.module.css'
import Footer from "../ui/dashboard/footer/footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style.container}>
      <div className={style.menu}>
        <Sidebar />
      </div>
      <div className={style.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
