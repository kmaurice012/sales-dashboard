"use client";

import { useState } from "react";
import styles from "./select.module.css";
const SelectComponent = () => {
  const [age, setAge] = useState("2003");
  const yearsArr = ["2003", "2004", "2005"];

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={styles.container}>
      <select className={styles.select}>
      {yearsArr.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
      </select>
    </div>
  );
};
export default SelectComponent;
