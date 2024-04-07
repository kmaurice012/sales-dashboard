"use client";
// import { cards } from "../lib/data";
import Card from "../ui/dashboard/card/card";
// import Chart from "../ui/dashboard/chart/chart";
import Barchart from "../ui/dashboard/barchart/barchart";
import styles from "../ui/dashboard/dashboard.module.css";
// import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
// import { graphData } from "@/app/lib/data";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const yearsArr = ["2003", "2004", "2005"];
  const [year, setYear] = useState("2003");
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState({
    data: [],
    rows: [],
    cards: [],
  });

  console.log(year);
  const handleChange = (event) => {
    setYear(event.target.value);
  };
  // const data = graphData;
  useEffect(() => {
    setLoading(true);
    fetch(`/api/sales?year=${year}`)
      .then((response) => response.json())
      .then((data) => {
        setAllData(data);
        console.log(data);
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [year]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        {loading ? (
          <div className={styles.cards}>Loading...</div>
        ) : (
          <>
            <div className={styles.cards}>
              {allData.cards.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </div>
            <Barchart data={allData.data} />
            {/* <Chart /> */}
            <Transactions
              rows={allData.rows}
              year={year}
              handleChange={handleChange}
              yearsArr={yearsArr}
            />
          </>
        )}
      </div>
      {/* <div className={styles.side}>
        <Rightbar />
      </div> */}
    </div>
  );
};

export default Dashboard;
