import { createUser, uploadPhoto } from "../utils.js";

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([p, u]) => {
      console.log(`${p.body} ${u.firstName} ${u.lastName}`);
    })
    .catch(() => console.log("Signup system offline"));
}
