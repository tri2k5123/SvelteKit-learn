<script>
    export let form;
</script>
<h1>page register</h1>

<form method="post" action="">
    <p>{form?.message || ""}</p>
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <button type="submit">Register</button>
</form>