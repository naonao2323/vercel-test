export const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        const error = new Error("データが取り出せませんでした。");
        error.info = await res.json()
        error.status = res.status
        throw error
    }
    const json = await res.json();
    return json;
}