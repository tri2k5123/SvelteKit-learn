<script>
    import Header from '$lib/header.svelte';
    import Footer from '$lib/footer.svelte' // giải thích
    export let data;
    const { username } = data; 
</script>

<Header />
<h1>{username}'page</h1>
<slot />
<Footer />

