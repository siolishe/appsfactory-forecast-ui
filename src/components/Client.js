/* eslint-disable no-debugger */
import client from "axios";

export default function HttpGet(url) {
    client.get(url)
        .then(response => (this.data = response.data, console.log(response.data)))
        .catch(error => console.log(error))
}

export function HttpPost(url, obj) {
    return client.post(url, obj)
        .then(response => (this.data = response.data))
        .catch(error => console.log(error))
}