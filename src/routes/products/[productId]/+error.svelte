<script>
    import { page } from '$app/stores';
</script>
<h1>{$page.status}</h1>
<h2>{$page.error.message}</h2>
<p>{$page.error.hint}</p>