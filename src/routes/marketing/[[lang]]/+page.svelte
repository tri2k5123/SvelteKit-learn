<script>
    import { page } from '$app/stores';
    const greetings = {
        en: 'hello',
        es: 'hola',
        fr: 'jourhor'
    }
    const { lang } = $page.params;
    const greeting = greetings[lang];
</script>

<h1>{greeting}</h1>