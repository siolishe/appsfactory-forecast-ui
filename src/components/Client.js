import client from "axios";

export default async function HttpGet(url) {
    let data = {};
    await client.get(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            data = response.data
        })
        .catch(error => console.log(error));
    return data;
}