"use client";
import React, { useState } from 'react';
import styles from "./select.module.css";


const Select = ({yearsRecord, selectedValue, onChange}) => {
 console.log(yearsRecord)

  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <select className={styles.select} value={selectedValue} onChange={onChange}>
          {yearsRecord?.map((item) => (
            <option className={styles.option} key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Select;
