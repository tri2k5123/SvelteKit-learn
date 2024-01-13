<script>
    import { goto } from '$app/navigation';
    export let course;
</script>

<div class="block-course">
    <h2 on:click={goto(`./products/${course.id}`)} class="name-course">{course.name}</h2>
    <p class="desc-course">{course.description}</p>
</div>


<style>
    a {
        text-decoration: none;
        color: #333;
    }
</style>