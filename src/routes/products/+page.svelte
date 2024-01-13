<script>
    export let data;
    const {courses, Component} = data;

</script>

<h1>Home Product</h1>

{#each courses as course }
    <Component {course}/>
{/each}
