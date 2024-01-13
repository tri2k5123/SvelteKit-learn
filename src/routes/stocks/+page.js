// depends là các phần phụ thuộc sẽ được refresh  chạy hàm depends và đưa vào 1 cái name bất kì 
// name này sẽ điền vào phần invalidate trong trang .svelte tương ứng
// Nếu dùng invalidateAll thì ko cần depends 
// cách dùng invalidate hay invalidateAll ảnh hưởng đến tốc độ load dữ liệu.
// Bản chất của invalidate là chạy lại hàm này và render ra giá trị mới.
export const load = async (loadEvent) => {
    const { fetch } = loadEvent;
    // depends("stock:actively-trading");
    const stocksResponse = await fetch('http://localhost:4000/stocks');
    const stocks = await stocksResponse.json()
    return {
        stocks
    }
}