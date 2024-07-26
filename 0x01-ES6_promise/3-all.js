import { createUser, uploadPhoto } from '../utils';

export default async function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then(([p, u]) => {
    console.log(`${p.body} ${u.firstName} ${u.lastName}`);
  });
}
