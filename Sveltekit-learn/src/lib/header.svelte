<script>
    import { goto } from '$app/navigation';
</script>
<div class="header">
    <button on:click={() => goto('/')}>home</button>
    header
    <button on:click={() => goto('./login')}>login</button>
    <button on:click={() => goto('./register')}>register</button>
    <button on:click={() => goto('./resetpassword')}>Reset password</button>
</div>


<style>
    .header {
        padding: 16px;
        text-align: center;
        background-color: black;
        color: white;
    }
</style>