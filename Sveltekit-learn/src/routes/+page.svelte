<script>
    import { goto, preloadCode } from '$app/navigation'
    export let data;
    var handle = () => {
        goto('./products') 
    }
    const greetings = {
        en: 'hello',
        es: 'hola',
        fr: 'jourhor'
    }

    // var listkeys = Object.keys(greetings)
</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>Bây giờ là {data.currentTime}</p>
<button on:click={handle}>go product </button><br/>
<button on:click={() => goto('./news')}>go product </button><br/>

<button
    on:focus={async() => await preloadCode('./stocks')}
    on:mouseover={async() => await preloadCode('./stocks')}
    on:click={() => goto('./stocks')}
>Stocks</button><br/>

{#each Object.keys(greetings) as key}
    <button on:click={() => goto(`./marketing/${key}`)}>{key}</button>
{/each}
