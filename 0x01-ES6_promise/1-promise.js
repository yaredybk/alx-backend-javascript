export default function getFullResponseFromAPI(success) {
  if (success === true)
    return Promise.resolve({ status: 200, body: "Success" });
  return Promise.reject("The fake API is not working currently");
}
