import {  getYearlySalesData, graphData,MonthlySales,cards, years } from "@/app/lib/data";

/**
 * Retrieves data from the server based on the provided year.
 *
 * @param {object} request - The request object containing the URL.
 * @return {Promise} A promise that resolves to the server response.
 */
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const year = searchParams.get('year'); 
  
    if (!year) {
      return new Response(JSON.stringify({ error: 'Year parameter is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  
    const yearlySales = await getYearlySalesData(year);
    const res = {
      cards: cards ?? [],
      data: graphData ?? [],
      rows: yearlySales ?? [],
      MonthlySales: MonthlySales ?? [],
      years: years ?? [],
    }
  
    return new Response(JSON.stringify(res), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }