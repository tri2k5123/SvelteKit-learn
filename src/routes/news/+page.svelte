<script>
    export let data;
</script>
{#each data.news as itemNew}
    <h1>{itemNew.title}</h1>
{/each}