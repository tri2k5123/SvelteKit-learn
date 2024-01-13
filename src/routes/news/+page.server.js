import { redirect } from '@sveltejs/kit';

export const load = async ({ fetch, cookies, url }) => {
    if(!cookies.get('username')) {
        throw redirect(307, `/login?redirectTo=${url.pathname}`);
    };
    const response = await fetch('http://localhost:4000/news');
    const news = await response.json();
    return { news }
}