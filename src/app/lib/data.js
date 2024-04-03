import { convertCsvToJson } from "./utils.js";

const csvData = await convertCsvToJson("public/sales_data_sample.csv");

//Returns A range of years

const salesRecords = csvData;
const uniqueYearIds = new Set();
salesRecords.forEach((record) => {
  uniqueYearIds.add(record.YEAR_ID);
});
const yearsArray = Array.from(uniqueYearIds);
const firstYear = yearsArray[0];
const latestYear = yearsArray[yearsArray.length - 1];
const previousYear = yearsArray[yearsArray.length - 2];

const shippedSales = csvData.filter((item) => item.STATUS === "Shipped");
//Start Of First Year Average Sales
const FirstYearSales = shippedSales.filter(
  (item) => item.YEAR_ID === firstYear
);
const FirstNoOfSales = FirstYearSales.length;
let FirstShippedSales = 0;

for (const order of FirstYearSales) {
  FirstShippedSales += parseFloat(Number(order.SALES));
}
const averageFirstYearSales = (FirstShippedSales / FirstNoOfSales).toFixed(2);
//End Of First Year Average Sales
//Start Of Latest Year Average Sales
const latestYearSales = shippedSales.filter(
  (item) => item.YEAR_ID === latestYear
);
const LatestNoOfSales = latestYearSales.length;
let LatestShippedSales = 0;

for (const order of latestYearSales) {
  LatestShippedSales += parseFloat(Number(order.SALES));
}
const averageLatestYearSales = (LatestShippedSales / LatestNoOfSales).toFixed(
  2
);
//End Of Latest Year Average Sales

//Start Of Previous Year Average Sales
const previousYearSales = shippedSales.filter(
  (item) => item.YEAR_ID === previousYear
);
const PreviousNoOfSales = previousYearSales.length;
let PreviousShippedSales = 0;
for (const order of previousYearSales) {
  PreviousShippedSales += parseFloat(Number(order.SALES));
}

const averagePreviousYearSales = (
  PreviousShippedSales / PreviousNoOfSales
).toFixed(2);

//End Of Previous Year Average Sales
//Calculate Total Sales Increase Or Decrease
let percentageIncrease = 0;
let percentageDeacrease = 0;
let change;
if (averageLatestYearSales > averagePreviousYearSales) {
  let difference = averageLatestYearSales - averagePreviousYearSales;
  percentageIncrease = ((difference / averagePreviousYearSales) * 100).toFixed(
    3
  );
  change = percentageIncrease;
} else if (averageLatestYearSales < averagePreviousYearSales) {
  let difference = averagePreviousYearSales - averageLatestYearSales;
  percentageDeacrease = ((difference / averageLatestYearSales) * 100).toFixed(
    3
  );
  change = -percentageDeacrease;
}

//Calculate Total Sales Increase Or Decrease

//   export const years = Array.from(uniqueYearIds);

// const shippedSales = csvData.filter((item) => item.STATUS === "Shipped");

// let TotalShippedSales = 0;
// shippedSales.forEach((item) => {
//   if(item.YEAR_ID === latestYear){
//     TotalShippedSales += item.SALES;
//   }
// });

//Returns sales recorded on a specificc year

export const getYearlySalesData = async (year) => {
  try {
    const response = csvData.filter((item) => item.YEAR_ID === "2003");
    yearsArray;
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
export const graphData = [
  {
    name: firstYear,
    sales:  Number(averageFirstYearSales),
  },
  {
    name: latestYear,
    sales:  Number(averagePreviousYearSales),
  },
  {
    name: previousYear,
    sales:  Number(averageLatestYearSales),
  },
];
export const cards = [
  {
    id: 1,
    title: "Total Average Shipped Sales",
    number: averageLatestYearSales,
    change: change,
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
    change: 2,
  },
];
