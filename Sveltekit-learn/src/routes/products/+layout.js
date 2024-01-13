export const load = async (loadEvent) => {
    const { data, parent } = loadEvent;
    const parentData = await parent();
    return {
        ...data,
        parentData
    }
}