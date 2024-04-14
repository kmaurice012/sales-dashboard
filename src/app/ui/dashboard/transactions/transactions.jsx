"use client";
import styles from "./transactions.module.css";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import SelectComponent from "../select/select";
import Chip from '@mui/material/Chip';

const getStatusBackgroundColor = (status) => {
  switch (status) {
    case "Shipped":
      return "#7FFF7F"; // Light green
    case "Disputed":
      return "#FF4500"; // Orange Red
    case "In Process":
      return "#FFD700"; // Gold
    case "Cancelled":
      return "#FF6347"; // Tomato
    case "On Hold":
      return "#87CEEB"; // Sky Blue
    case "Resolved":
      return "#00CED1"; // Dark Turquoise
    default:
      return "#FFFFFF"; // Default color
  }
};
const columns = [

  {
    field: "CUSTOMERNAME",
    headerName: "Name",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "STATUS",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    width: 160,
    headerClassName: "super-app-theme--header",
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
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "SALES",
    headerName: "Amount",
    description: "This column has a value getter and is not sortable.",
    width: 160,
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
              paginationModel: { page: 0, pageSize: 6 },
            },
          }}
          pageSizeOptions={[6, 10]}
        />
      </Box>
    </div>
  );
};

export default Transactions;
