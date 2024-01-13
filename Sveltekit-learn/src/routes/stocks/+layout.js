// Thay vì phải đợi từng cái thì ta có thể sử dụng C2 như vậy từng cái sẽ hoạt động độc lập cải thiện hiệu suất 
// cách này chỉ được sử dụng với key đầu tiên 
export const load = async (loadEvent) => {
    const { fetch } = loadEvent;
    const mostActiveStockResponse = await fetch('http://localhost:4000/most-active-stock');
    const topGainingStockResponse = await fetch('http://localhost:4000/top-gaining-stock');
    const topLosingStockResponse = await fetch('http://localhost:4000/top-losing-stock');
    // const mostActiveStock = await mostActiveStockResponse.json();c1
    // const topGainingStock = await topGainingStockResponse.json();c1
    // const topLosingStock = await topLosingStockResponse.json();c1
    return {
        // mostActiveStock, c1
        // topGainingStock, c1
        // topLosingStock, c1
        mostActiveStock: mostActiveStockResponse.json(),// c2
        topGainingStock: topGainingStockResponse.json(),// c2
        topLosingStock: topLosingStockResponse.json()// c2
        // anotherStock: {
        //     nestedStock: Response.json();
        // } Ví dụ ko sử dụng được cách 2
    }
}