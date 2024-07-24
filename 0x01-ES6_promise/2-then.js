/**
 *
 * @param {Promise} promise
 */
export default function handleResponseFromAPI(promise) {
  promise
    .then((_) => ({ status: 200, body: "Success" }))
    .catch(() => new Error())
    .finally(() => console.log("Got a response from the API"));
}
