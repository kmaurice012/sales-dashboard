"use client";
import styles from "./transactions.module.css";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import SelectComponent from "../select/select";

const columns = [
  {
    field: "ORDERNUMBER",
    headerName: "Order Number",
    width: 90,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "CUSTOMERNAME",
    headerName: " Customer Name",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "ORDERDATE",
    headerName: "Order Date",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "PRODUCTLINE",
    headerName: "Product Line",
    type: "number",
    width: 110,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "SALES",
    headerName: "Sales",
    description: "This column has a value getter and is not sortable.",
    width: 160,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "STATUS",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    width: 160,
    headerClassName: "super-app-theme--header",
  },
];

const Transactions = ({ rows, year, handleChange, yearsArr }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tableHead}>
        <h2 className={styles.title}>Transactions</h2>
        <SelectComponent
          year={year}
          handleChange={handleChange}
          yearsArr={yearsArr}
        />
      </div>
      <Box
        sx={{
          height: 400,
          width: "100%",
          // "& .super-app-theme--header .MuiDataGrid-colCellTitle": {
          //   backgroundColor: "blue",
          // },
          "& .MuiDataGrid-colHeader .mui-7y4bub-MuiDataGrid-root .MuiDataGrid-withBorderColor":
            {
              backgroundColor: "rgba(255, 7, 0, 0.55) !important",
            },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.ORDERNUMBER}
          className={styles.dataGrid}
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: "#182237",
            "& .MuiDataGrid-cell:hover": {
              color: "#0B60B0",
            },
            color: "var(--textSoft)",
            ".mui-gfiybt-MuiDataGrid-root .MuiDataGrid-filler": {
              background: " red",
            },

            " .mui-1r6a1rc-MuiDataGrid-root .MuiDataGrid-container--top [role=row], .mui-1r6a1rc-MuiDataGrid-root .MuiDataGrid-container--bottom [role=row]":
              {
                background: " #6c2a2a" + " !important",
                color: "red",
              },

            ".mui-rtrcn9-MuiTablePagination-root": {
              color: "var(--textSoft)",
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
