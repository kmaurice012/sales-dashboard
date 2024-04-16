import fs from "fs"
import csvParser from "csv-parser"

/**
 * Converts a CSV file to JSON.
 *
 * @param {string} filePath - The path to the CSV file.
 * @return {Promise<Array>} A promise that resolves to an array of objects representing the CSV data.
 */
export const convertCsvToJson = async (filePath) => {
    const results = [];
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

