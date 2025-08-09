export const prerender = false; // no es estático

export async function GET({}) {
    const url =
        "https://timeapi.io/api/time/current/zone?timeZone=America%2FArgentina%2FBuenos_Aires";
    const response = await fetch(url, {
        cache: "no-store",
    });
    const timeData = await response.json();

    return new Response(JSON.stringify(timeData), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
