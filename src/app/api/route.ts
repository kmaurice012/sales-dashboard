import fs from "fs";
import csvParser from "csv-parser";
import { NextResponse } from "next/server";

const convertCsvToJson = async (filePath: fs.PathLike) => {
  const results: Array<Object> = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        resolve(results);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

export async function GET() {
  try {
    const response = await convertCsvToJson('public/sales_data_sample.csv');
  
    return NextResponse.json({
      data: response,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: 'Failed to convert CSV to JSON',
    }, { status: 500 });
  }
}
