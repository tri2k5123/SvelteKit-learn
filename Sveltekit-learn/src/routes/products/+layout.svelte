<script>
    export let data;
    const { featuredProducts, username } = data;
</script>
<slot/>

<h1>Featured Products for {username}</h1>


{#each featuredProducts as product}
    <div class="product-item">
        <h1>{product.title}</h1>
        <h4>{product.price}</h4>
        <p>{product.description}</p>
    </div>
{/each}

<style>
    .product-item {
        width: 200px;
        display: inline-block;
        border: 1px solid #ccc;
        margin: 10px;
        padding: 10px;
    }
</style>