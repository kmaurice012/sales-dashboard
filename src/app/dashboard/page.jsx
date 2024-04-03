import { cards } from "../lib/data";
import Card from "../ui/dashboard/card/card";
// import Chart from "../ui/dashboard/chart/chart";
import  Barchart  from "../ui/dashboard/barchart/barchart";
import styles from "../ui/dashboard/dashboard.module.css";
// import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import { graphData, getYearlySalesData } from "@/app/lib/data";


const Dashboard = async () => {
  const data = graphData
 const rows = await getYearlySalesData();

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Barchart data={data}/>
        {/* <Chart /> */}
        <Transactions rows={rows}/>
    
      </div>
      {/* <div className={styles.side}>
        <Rightbar />
      </div> */}
    </div>
  );
};

export default Dashboard;
