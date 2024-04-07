"use client";

import { useState } from "react";
import styles from "./select.module.css";
const SelectComponent = ({year,handleChange, yearsArr}) => {
 
  return (
    <div className={styles.container}>
      <select className={styles.select} value={year} onChange={handleChange}>
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
