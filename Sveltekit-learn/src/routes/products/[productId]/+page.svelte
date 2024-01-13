<script>
    import { page } from '$app/stores';
    // còn 2 phương thức là beforeNavigation, afterNavigation cả 2 truyền vào 1 tham số là navigation xem lại video 11
    // const productId = $page.params.productId;
    import { goto } from '$app/navigation';
    // import { courses } from '$lib/courses.js';
    export let data;
    let { productId, course } = data;
    
    function handleClick() {
        goto(`./${productId}/review/${productId}`) 
        // đối số thứ 2 là 1 object nó ghi nhớ path lần cuối truy cập để khi nhấn vào nút back
        // thì tự động trình duyệt sẽ quay lại trang đó cho mình { replaceState: true }
    }
</script>
<h1>Page product {productId}</h1>
<h2>Course {course.name}</h2>
<h2>Description: {course.description}</h2>
<button on:click={() => goto(`./${productId}/review/${productId}`)}>detail</button>
