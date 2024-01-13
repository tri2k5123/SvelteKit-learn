export const load = async (serverLoadEvent) => {
    const { fetch } = serverLoadEvent;
    const response = await fetch("http://localhost:4000/featured-products");
    const featuredProducts = await response.json();
    return { featuredProducts }
}

