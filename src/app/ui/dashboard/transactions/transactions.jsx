"use client";
import styles from "./transactions.module.css";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import SelectComponent from "../select/select";

const columns = [
  { field: "ORDERNUMBER", headerName: "Order Number", width: 90 },
  {
    field: "CUSTOMERNAME",
    headerName: " Customer Name",
    width: 150,
  },
  {
    field: "ORDERDATE",
    headerName: "Order Date",
    width: 150,
  },
  {
    field: "PRODUCTLINE",
    headerName: "Product Line",
    type: "number",
    width: 110,
  },
  {
    field: "SALES",
    headerName: "Sales",
    description: "This column has a value getter and is not sortable.",
    width: 160,
  },
  {
    field: "STATUS",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    width: 160,
  },
];

const Transactions = ({ rows,year,handleChange, yearsArr }) => {
  return (
    <div className={styles.container}>
       <div className={styles.tableHead}>
        <h2 className={styles.title}>Transactions</h2>
        <SelectComponent year={year} handleChange={handleChange} yearsArr={yearsArr}/>
      </div>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.ORDERNUMBER}
          className={styles.dataGrid}
          sx={{
            "& .MuiDataGrid-cell": {
              border: "none",
            },
            " .mui-s1v7zr-MuiDataGrid-virtualScrollerRenderZone": {
              color: "aliceblue",
            },
            ".mui-rtrcn9-MuiTablePagination-root": {
              color: "aliceblue",
            },
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Box>
    </div>
  );
};

export default Transactions;
