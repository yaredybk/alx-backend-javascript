/**
 *
 * @param {Promise} promise
 */
export default function handleResponseFromAPI(promise) {
  promise
    .then((_) => {
      console.log("Got a response from the API");
      return Promise.resolve({ status: 200, body: "Success" });
    })
    .catch(Promise.reject(new Error()));
}
