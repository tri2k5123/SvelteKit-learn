// khi sử dụng +page.server.js thì nó chỉ chạy trên server tắt trình js của browser vẫn chạy bth 
// như ví dụ console.log('hello') ko chạy trên trình duyệt mà chỉ chạy trên cmd của server.
// khi sử dụng serverLoadEvent hay loadEvent trong file +page.js để tạo fetch có 1 số lợi ích như 
// đường dẫn chỉ cần ghi fetch("courses") thay vì fetch("http://localhost:4000/courses")
// import { BD_PASSWORD } from '$env/static/private';
// import { PUBLIC_BASE_URL } from '$env/static/public';
export const load = async(serverLoadEvent) => {
    const { fetch } = serverLoadEvent;
    const response = await fetch("http://localhost:4000/courses");
    const courses = await response.json();
    return { courses }
}