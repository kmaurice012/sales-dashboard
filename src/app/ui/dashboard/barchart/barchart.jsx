"use client"

import styles from './barchart.module.css'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Barchart = ({data}) => {

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Yearly Sales Report</h2>
      <ResponsiveContainer width="100%" height="90%"> 
      <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}  
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#0B60B0" activeBar={<Rectangle fill="#40A2D8" stroke="#  F0EDCF" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Barchart