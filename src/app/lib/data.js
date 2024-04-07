import { convertCsvToJson } from "./utils.js";
import path from "path";

const filePath = path.join(process.cwd(), "public", "sales_data_sample.csv");

const csvData = await convertCsvToJson(filePath);

//Returns A range of years

const salesRecords = csvData;
const uniqueYearIds = new Set();
salesRecords.forEach((record) => {
  uniqueYearIds.add(record.YEAR_ID);
});
const yearsArray = Array.from(uniqueYearIds);

// Get the first and last years

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

// Start Of Latest Year Average Orders
   let LatestOderedProducts = 0;
   for (const order of latestYearSales) {
     LatestOderedProducts += Number(order.QUANTITYORDERED);
   }
   const averageLatestYearOders = (LatestOderedProducts / LatestNoOfSales).toFixed(2)

// End Of Lates Year Average Orders

// Start Of Latest Year Average No Orders

const uniqueCustomerIds = new Set();
latestYearSales.forEach((record) => {
  uniqueCustomerIds.add(record.CUSTOMERNAME);
});
const customersArray = Array.from(uniqueCustomerIds);
const latestNoOfCustomersThatYear = customersArray.length
// End Of Latest Year Average No Orders

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

//Start Of Previous Year Average Oders
let PreviousOderedProducts = 0;
for (const order of previousYearSales) {
  PreviousOderedProducts += Number(order.QUANTITYORDERED);
}
const averagePreviousYearOders = (PreviousOderedProducts / PreviousNoOfSales).toFixed(2)
//End Of Previous Year Average Oders

// Start Of Latest Year Average No Orders

const uniquePreviousCustomerIds = new Set();
previousYearSales.forEach((record) => {
  uniquePreviousCustomerIds.add(record.CUSTOMERNAME);
});
const previousCustomersArray = Array.from(uniquePreviousCustomerIds);
const previousNoOfCustomersThatYear = previousCustomersArray.length

// End Of Latest Year Average No Orders

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

//Calculate Total Oder Increase Or Decrease
let percentageOrderIncrease = 0;
let percentageOrderDeacrease = 0;
let orderchange;
if (averageLatestYearOders > averagePreviousYearOders) {
  let difference = averageLatestYearOders - averagePreviousYearOders;
  percentageOrderIncrease = ((difference / averagePreviousYearOders) * 100).toFixed(
    3
  );
  orderchange = percentageOrderIncrease;
} else if (averageLatestYearOders < averagePreviousYearOders) {
  let difference = averagePreviousYearOders - averageLatestYearOders;
  percentageOrderDeacrease = ((difference / averageLatestYearOders) * 100).toFixed(
    3
  );
  orderchange = -percentageOrderDeacrease;
}
//Calculate Total Oder Increase Or Decrease
//Calculate Anual No Of Customers Increase Or Decrease
let percentageCustomerIncrease = 0;
let percentageCustomerDeacrease = 0;
let customerchange;
if (latestNoOfCustomersThatYear > previousNoOfCustomersThatYear) {
  let difference = latestNoOfCustomersThatYear - previousNoOfCustomersThatYear;
  percentageCustomerDeacrease = ((difference / previousNoOfCustomersThatYear) * 100).toFixed(
    3
  );
  customerchange = percentageCustomerDeacrease;
} else if (latestNoOfCustomersThatYear < previousNoOfCustomersThatYear) {
  let difference = previousNoOfCustomersThatYear - latestNoOfCustomersThatYear;
  percentageCustomerIncrease = ((difference / latestNoOfCustomersThatYear) * 100).toFixed(
    3
  );
  customerchange = -percentageCustomerIncrease;
}
//Calculate Anual No Of Customers Increase Or Decrease

//Returns sales recorded on a specific year

export const getYearlySalesData = async (year) => {
  try {
    const response = csvData
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
    title: "Total Average Orders",
    number: averageLatestYearOders,
    change: orderchange,
  },
  {
    id: 3,
    title: "Total No Of Customers",
    number: latestNoOfCustomersThatYear,
    change: customerchange,
  },
];
