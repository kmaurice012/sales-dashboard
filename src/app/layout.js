import { Inter } from "next/font/google";
import "./ui/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Sidebar from "./ui/dashboard/sidebar/sidebar";
import Navbar from "./ui/dashboard/navbar/navbar";
import Footer from "./ui/dashboard/footer/footer";
import styles from "./ui/dashboard/dashboard.module.css"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sales Dashboard",
  description: "Sales Dashboard With Reports Report",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <div className={styles.menu}>
            <Sidebar />
          </div>
          <div className={styles.content}>
            <Navbar />
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
