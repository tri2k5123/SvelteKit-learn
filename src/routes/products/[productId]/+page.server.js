// import { error } from '@sveltejs/kit';
// hiện lỗi khi ko có sản phẩm
import { redirect } from '@sveltejs/kit';
// chuyển hướng khi đăng nhập xong hoặc là qua trang đăng kí khi chưa có tài khoản
export const load = async(serverLoadEvent) => {
    const { fetch, params } = serverLoadEvent;
    // Còn có 2 đối số là url và route 
    const { productId } = params;
    if(productId > 3) {
        // throw error(404, {
        //     message: 'Product not found',
        //     hint: 'Please, Try a different product'
        // });
        throw redirect(307, '/products')
    };
    const response = await fetch(`http://localhost:4000/courses/${productId}`);
    const course = await response.json();
    return { productId, course }
}