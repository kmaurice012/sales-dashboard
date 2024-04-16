"use client"

import styles from './chart.module.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({ data }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Monthly Sales Report</h2>
      <ResponsiveContainer width="98%" height="90%" sx={{}}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sales2005" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Area type="monotone" dataKey="sales2004" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="sales2003" stackId="1" stroke="#8884d8" fill="#8884d8" />   
        </AreaChart>
      </ResponsiveContainer>
      
    </div>
  )
}

export default Chart