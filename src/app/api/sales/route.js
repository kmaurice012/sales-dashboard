import {  getYearlySalesData, graphData, cards } from "@/app/lib/data";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const year = searchParams.get('year'); // Assuming a query param like ?year=2023
  
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
    }
    // if (data.error) {
    //   return new Response(JSON.stringify(res), {
    //     status: data.status,
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
    // }
  
    return new Response(JSON.stringify(res), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }