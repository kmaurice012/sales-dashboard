import { convertCsvToJson } from "./utils.js";

const csvData = await convertCsvToJson("public/sales_data_sample.csv");

//Returns A range of years

    const salesRecords = csvData
    const uniqueYearIds = new Set();
    salesRecords.forEach((record) => {
      uniqueYearIds.add(record.YEAR_ID);
    });
  export const years = Array.from(uniqueYearIds);


//Returns sales recorded on a specificc year

export const getYearlySalesData = async (year) => {
  try {
    const response = csvData.filter((item) => item.YEAR_ID === "2003");
    return response;
  } catch {
    return {
      error: "Failed to convert CSV to JSON",
      status: 500,
    };
  }
};
export const getAverageYearlySalesData = async (year) => {
  try {
    const response = csvData.filter((item) => item.YEAR_ID === "2003");
    return response;
  } catch {
    return {
      error: "Failed to convert CSV to JSON",
      status: 500,
    };
  }
};
export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
