"use client"

import styles from './barchart.module.css'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Barchart = ({graphData}) => {
  const data = graphData
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sales Report</h2>
      {graphData?.map((item) => (
        console.log(item),
        <div className={styles.item} key={item.name}>
          <div >{item.name}</div>
        </div>
      ))
      }
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
          <Bar dataKey="sales" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Barchart