"use client";
import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Barchart from "../ui/dashboard/barchart/barchart";
import styles from "../ui/dashboard/dashboard.module.css";
import Transactions from "../ui/dashboard/transactions/transactions";
import { useState, useEffect } from "react";



const Dashboard = () => {
 
  const [year, setYear] = useState("2003");
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState({
    data: [],
    rows: [],
    cards: [],
    MonthlySales: [],
    years: [],
  });


  const handleChange = (event) => {
    setYear(event.target.value);
  };


  useEffect(() => {
    setLoading(true);
    fetch(`/api/sales?year=${year}`)
      .then((response) => response.json())
      .then((data) => {
        setAllData(data);
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [year]);

  const  data = allData.MonthlySales;
  const yearsArr = allData.years
  
  return (
  
    <div className={styles.wrapper}>
      <div className={styles.main}>
        {loading ? (
          <div className={styles.cards} style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <progress className="pure-material-progress-linear"/>
          </div>
        ) : (
          <>
            <div className={styles.cards}>
              {allData.cards.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </div>
            <Chart data={data} />
            <Barchart data={allData.data} />
            <Transactions
              rows={allData.rows}
              year={year}
              handleChange={handleChange}
              yearsArr={yearsArr}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
