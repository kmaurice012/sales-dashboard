import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

interface LayoutProps {
    children: React.ReactNode;
  }
  

const Layout : React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
