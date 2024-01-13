<script>
    export let data;
    const { mostActiveStock, topGainingStock, topLosingStock } = data;
</script>

<h3>{mostActiveStock.symbol} - {mostActiveStock.price}</h3><br/>
<h3>{topGainingStock.symbol} - {topGainingStock.price}</h3><br/>
<h3>{topLosingStock.symbol} - {topLosingStock.price}</h3>
<slot/>