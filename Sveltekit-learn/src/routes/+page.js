export const load = async({ fetch }) => {
    const response = await fetch("./api/current-time");
    const currentTime = await response.text();
    return { currentTime }
}

// export const prerender = true;
export const csr = false;