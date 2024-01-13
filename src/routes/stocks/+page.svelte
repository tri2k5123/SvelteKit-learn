<script>
    import { invalidateAll } from '$app/navigation';
    export let data;
    function refresh() {
        invalidateAll();
    }
    // Nếu dùng invalidate thì nó sẽ chỉ refresh những cái phụ thuộc trong phần hiện tại
    // Nếu là page thì chỉ refresh page nếu là layout thì chỉ refresh layout;
    // Nếu dùng invalidateAll thì không cần truyền j hết
    // import { invalidate } from '$app/navigation';
    // function refresh() {
    //     invalidate("stock:actively-trading");
    // }
</script>
<h1>Actively Trading stocks</h1>
{#each data.stocks as stock}
    <h2>{stock.symbol} - {stock.price}</h2>
{/each}

<button on:click={refresh}>Update</button>