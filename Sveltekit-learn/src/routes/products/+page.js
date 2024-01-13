import Product from './Product.svelte';
// import { PUBLIC_BASE_URL } from '$env/static/public';
export const load = async(loadEvent) => {
    const { data } = loadEvent;
    return { 
        ...data,
        Component: Product }
}