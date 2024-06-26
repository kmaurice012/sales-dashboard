import { convertCsvToJson } from "./utils.js";
import path from "path";


const filePath = path.join(process.cwd(), "public", "sales_data_sample.csv");

const csvData = await convertCsvToJson(filePath);

const shippedSales = csvData.filter((item) => item.STATUS === "Shipped");

//Returns A range of years

const salesRecords = csvData;
const uniqueYearIds = new Set();
salesRecords.forEach((record) => {
  uniqueYearIds.add(record.YEAR_ID);
});
const yearsArray = Array.from(uniqueYearIds);



/**
 * Calculates the average yearly sales based on the provided yearly sales data.
 *
 * @return {void} 
 */

let yearlyAvaragesSales = [];
let yearlyAvaragesOrders = [];
let yearlyAvaragesNoCustomers = [];
let MonthlyAverageSales = [];
let months = [ { id: "1" , name : "Jan"}, { id: "2" , name : "Feb"}, { id: "3" , name : "Mar"}, { id: "4" , name : "Apr"}, { id: "5" , name : "May"}, { id: "6", name : "Jun"}, { id: "7" , name : "Jul"}, { id: "8" , name : "Aug"}, { id: "9" , name : "Sep"}, { id: "10" , name : "Oct"}, { id: "11" , name : "Nov"}, { id: "12" , name : "Dec"}];

const getAverageYearlySalesData = () => {
  for (let index = 0; index < yearsArray.length; index++) {
    const yearlySales = shippedSales.filter(
      (item) => item.YEAR_ID === yearsArray[index]
    );

    /**
     * Calculates the average yearly sales based on the provided yearly sales data.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */

    const getYearlyAvarageSales = () => {
      const noOfSales = yearlySales.length;

      let ShippedSales = 0;
      for (const order of yearlySales) {
        ShippedSales += parseFloat(Number(order.SALES));
      }
      const averageYearlySales = (ShippedSales / noOfSales).toFixed(2);
      let avarageObj = {
        name: "",
        sales: 0,
      };
      avarageObj.name = yearsArray[index];
      avarageObj.sales = Number(averageYearlySales);
      yearlyAvaragesSales.push(avarageObj);
    };
    getYearlyAvarageSales(); 


/**
 * Calculates the average monthly sales for each month of a given year.
 *
 * @return {Array} An array of objects containing the average monthly sales for each month.
 */
    const getMonthlyAvarageSales = () => {
    let avarageYearlyMonthlySales = [];
      for (let i = 0; i < months.length; i++) {
        const element = months[i];
        const monthlySales = shippedSales.filter(
          (item) => item.YEAR_ID === yearsArray[index] && item.MONTH_ID === element.id
        )
        let sales = 0;
        monthlySales.forEach((item) => {
          sales += parseFloat(Number(item.SALES));  
        })
        const allMonthlySales = (sales).toFixed(2);

        let avarageObj = {
          id : months[i].id,
          name: months[i].name,
        }
        avarageObj[`sales${yearsArray[index]}`] = Number(allMonthlySales);
        avarageYearlyMonthlySales.push(avarageObj);
      }
      MonthlyAverageSales.push(avarageYearlyMonthlySales);
    }
    getMonthlyAvarageSales();

    /**
     * Calculate the average yearly orders based on the input data.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
    const getYearlyAvaragesOrders = () => {
      const noOfSales = yearlySales.length;

      let ordererdProducts = 0;
      for (const order of yearlySales) {
        ordererdProducts += parseFloat(Number(order.QUANTITYORDERED));
      }
      const averageYearlyOrders = (ordererdProducts / noOfSales).toFixed(2);
      let avarageObj = {
        name: "",
        oders: 0,
      };
      avarageObj.name = yearsArray[index];
      avarageObj.oders = Number(averageYearlyOrders);
      yearlyAvaragesOrders.push(avarageObj);
    };

    getYearlyAvaragesOrders();


    /**
     * Calculate the yearly average number of customers.
     *
     * @return {void} 
     */
    const getYearlyAvarageNoOfCustomers = () => {

      const uniqueCustomerIds = new Set();
        yearlySales.forEach((record) => {
        uniqueCustomerIds.add(record.CUSTOMERNAME);
      });
      const noOfCustomers = Array.from(uniqueCustomerIds);

      let avarageObj = {
        name: "",
        customers: 0,
      };
      avarageObj.name = yearsArray[index];
      avarageObj.customers = noOfCustomers.length;
      yearlyAvaragesNoCustomers.push(avarageObj);
    };

    getYearlyAvarageNoOfCustomers()
  }
};
getAverageYearlySalesData();

/**
 * Merges the monthly average sales data into a single array,
 * where each month has its own object containing the average sales
 * for that month. If a month appears in more than one year,
 * the monthly sales are combined.
 *
 * @return {Array} An array of objects, where each object
 * contains the monthly average sales data for a given month.
 */
export const MonthlySales = MonthlyAverageSales.reduce((acc, curr) => {
  curr.forEach(item => {
    const { id, name, ...rest } = item;
    const existingItem = acc.find(accItem => accItem.id === id);
    if (existingItem) {
      Object.assign(existingItem, rest);
    } else {
      acc.push({ id, name, ...rest });
    }
  });
  return acc;
}, []);




/**
 * Calculate the percentage increase or decrease in sales based on the latest and previous year sales.
 *
 * @param None
 * @return None
 */

let yearlyAvaragesSalesClone = [...yearlyAvaragesSales];

let averagelatestYearSales = yearlyAvaragesSalesClone[yearlyAvaragesSalesClone.length - 1];
let averagepreviousYearSales = yearlyAvaragesSalesClone[yearlyAvaragesSalesClone.length - 2];

let percentageSalesIncrease = 0;
let percentageSalesDeacrease = 0;
let pecentageSalesChange;

const getPercentageSalesIncreaseOrDecrease = () => {

  if (averagelatestYearSales.sales > averagepreviousYearSales.sales) {
    let difference = averagelatestYearSales.sales - averagepreviousYearSales.sales;
    percentageSalesIncrease = ((difference / averagepreviousYearSales.sales) * 100).toFixed(
      3
    );
    pecentageSalesChange = percentageSalesIncrease;
  } else if (averagelatestYearSales.sales < averagepreviousYearSales.sales) {
    let difference = averagepreviousYearSales.sales - averagelatestYearSales.sales;
    percentageSalesDeacrease = ((difference / averagelatestYearSales.sales) * 100).toFixed(
      3
    );
    pecentageSalesChange = -percentageSalesDeacrease;
  }
}

getPercentageSalesIncreaseOrDecrease()


let yearlyAvaragesOrdersClone = [...yearlyAvaragesOrders];

let averagelatestYearOrders = yearlyAvaragesOrdersClone[yearlyAvaragesOrdersClone.length - 1];
let averagepreviousYearrOrders = yearlyAvaragesOrdersClone[yearlyAvaragesOrdersClone.length - 2];


/**
 * Calculates the percentage increase or decrease in orders between the latest year and the previous year.
 *
 * @return {number} The percentage change in orders.
 */


let percentageOrderIncrease = 0;
let percentageOrderDeacrease = 0;
let pecentageOrderChange;

const getPercentageOrderIncreaseOrDecrease = () => {
  if (averagelatestYearOrders.oders > averagepreviousYearrOrders.oders) {
    let difference = averagelatestYearOrders.oders - averagepreviousYearrOrders.oders;
    percentageOrderIncrease = ((difference / averagepreviousYearrOrders.oders) * 100).toFixed(
      3
    );
    pecentageOrderChange = percentageOrderIncrease;
  } else if (averagelatestYearOrders.oders < averagepreviousYearrOrders.oders) {
    let difference = averagepreviousYearrOrders.oders - averagelatestYearOrders.oders;
    percentageOrderDeacrease = ((difference / averagelatestYearOrders.oders) * 100).toFixed(
      3
    );
    pecentageOrderChange = -percentageOrderDeacrease;
  }
}
getPercentageOrderIncreaseOrDecrease()


/**
 * Calculates the percentage increase or decrease in customers between the latest year and the previous year.
 *
 * @return {number} The percentage change in customers
 */

let yearlyAvaragesNoCustomersClone = [...yearlyAvaragesNoCustomers];

let averagelatestYearNoCustomers = yearlyAvaragesNoCustomersClone[yearlyAvaragesNoCustomersClone.length - 1];
let averagepreviousYearNoCustomers = yearlyAvaragesNoCustomersClone[yearlyAvaragesNoCustomersClone.length - 2];


let percentageCustomerIncrease = 0;
let percentageCustomerDeacrease = 0;
let pecentageCustomerChange;

const getPercentageCustomerIncreaseOrDecrease = () => {
  if (averagelatestYearNoCustomers.customers > averagepreviousYearNoCustomers.customers) {
    let difference = averagelatestYearNoCustomers.customers - averagepreviousYearNoCustomers.customers;
    percentageCustomerIncrease = ((difference / averagepreviousYearNoCustomers.customers) * 100).toFixed(
      3
    );
    pecentageCustomerChange = percentageCustomerIncrease;
  } else if (averagelatestYearNoCustomers.customers < averagepreviousYearNoCustomers.customers) {
    let difference = averagepreviousYearNoCustomers.customers - averagelatestYearNoCustomers.customers;
    percentageCustomerDeacrease = ((difference / averagelatestYearNoCustomers.customers) * 100).toFixed(
      3
    );
    pecentageCustomerChange = -percentageCustomerDeacrease;
  }
}

getPercentageCustomerIncreaseOrDecrease()


/**
 * Retrieves and returns sales data for a specific year.
 *
 * @param {number} year - The year for which sales data is requested
 * @return {Array} An array of sales data for the specified year
 */
export const getYearlySalesData = async (year) => {
  try {
    const response = csvData.filter((item) => item.YEAR_ID === year);
    yearsArray;
    return response;
  } catch {
    return {
      error: "Failed to convert CSV to JSON",
      status: 500,
    };
  }
};

export const graphData = yearlyAvaragesSales
export const years = yearsArray

  export const cards = [
    {
      id: 1,
      title: "Total Average Shipped Sales",
      number: averagelatestYearSales.sales,
      change: pecentageSalesChange,
    },
    {
      id: 2,
      title: "Total Average Orders",
      number: averagelatestYearOrders.oders,
      change: pecentageOrderChange,

    },
    {
      id: 3,
      title: "Total No Of Clients",
      number: averagelatestYearNoCustomers.customers,
      change: pecentageCustomerChange,

    },
  ];
