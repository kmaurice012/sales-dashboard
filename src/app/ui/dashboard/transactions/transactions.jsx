"use client";
import styles from "./transactions.module.css";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import SelectComponent from "../select/select";
import Chip from '@mui/material/Chip';
import moment from "moment"

const columns = [

  {
    field: "CUSTOMERNAME",
    headerName: "Name",
    width: 250,
  },
  {
    field: "STATUS",
    headerName: "Status",
    width: 250,
    renderCell: (params) => (
      <div>
       {params.value === "Shipped" ? (
          <Chip label={params.value} color="success" />
        ) : params.value === "Disputed" ? (
          <Chip label={params.value} color="warning" />
        ) : params.value === "In Process" ? (
          <Chip label={params.value} color="info" />
        ) : params.value === "Cancelled" ? (
          <Chip label={params.value} color="error" />
        ) : params.value === "On Hold" ? (
          <Chip label={params.value} color="secondary" />
        ) : params.value === "Resolved" ? (
          <Chip label={params.value} color="primary" />
        ) : (
          <span>{params.value}</span>
        )}
      </div>  
    ),
  },
  {
    field: "ORDERDATE",
    headerName: "Date",
    width: 250,
    renderCell: (params) => (
      <div>
        {` ${moment(params.value).format("MMM Do YYYY")}`}
      </div>
 ),
  },
  {
    field: "SALES",
    headerName: "Amount",
    width: 200,
    renderCell: (params) => (
         <div>
           {`$ ${params.value}`}
         </div>
    ),
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
            "&.MuiDataGrid-root": {
              border: "none",
            },
            ".MuiDataGrid-columnSeparator": {
              display: "none",
            },

            " .MuiDataGrid-container--top [role=row]": {
              background: " var(--bg) !important",
            },
          }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 20, 50, 100, 200, 500]}
        />
      </Box>
    </div>
  );
};

export default Transactions;
