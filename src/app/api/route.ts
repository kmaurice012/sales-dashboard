import { NextResponse } from "next/server";
import fs from "fs";
import csvParser from "csv-parser";

export async function GET() {
  let response = new Array();
  fs.createReadStream("public/sales_data_sample.csv")
    .pipe(csvParser())
    .on("data", (data) => {
      response.push(data);
    })
    .on("end", () => {
      response =response
    });
  return NextResponse.json({
    response: response,
  });
}
