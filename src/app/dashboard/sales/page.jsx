import { years, getYearlySalesData } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Select from "@/app/ui/dashboard/select/select"
import styles from "@/app/ui/dashboard/sales/sales.module.css";



const SalesPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const sales = await getYearlySalesData();
  const count = sales.length;
 
  const yearsRecord = years;
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a record..." />
        {/* <Select items={yearsRecord}  value={selectedValue} onChange={handleChange}/> */}
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Customer Name</td>
            <td>Order Date</td>
            <td>Product Line</td>
            <td>Sales</td>
            <td>Price Each</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {sales?.map((sale) => (
            <tr key={sale.ORDERNUMBER}>
              <td>{sale.CUSTOMERNAME}</td>
              <td>{sale.ORDERDATE}</td>
              <td>{sale.PRODUCTLINE}</td>
              <td>{sale.SALES}</td>
              <td>{sale.PRICEEACH}</td>
              <td>{sale.STATUS}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default SalesPage;
