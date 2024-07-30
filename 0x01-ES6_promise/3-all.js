import { createUser, uploadPhoto } from '../utils';

<<<<<<< HEAD
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([p, u]) => {
      console.log(`${p.body} ${u.firstName} ${u.lastName}`);
    })
    .catch(() => console.log("Signup system offline"));
=======
export default async function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then(([p, u]) => {
    console.log(`${p.body} ${u.firstName} ${u.lastName}`);
  });
>>>>>>> a2177f497d617874ce2a133c23508d6675cbcac8
}
