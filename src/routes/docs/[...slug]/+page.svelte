<script>
    import { page } from '$app/stores';
    var slugArr = $page.params.slug.split('/')
</script>
{#if slugArr.length === 1}
    <p>docs {slugArr[0]}</p>
{:else if slugArr.length === 2}
    <p>docs {slugArr[0]} in {slugArr[1]}</p>
{/if}