import { createUser, uploadPhoto } from '../utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then(([p, u]) => {
    console.log(`${p.body} ${u.firstName} ${u.lastName}`);
  });
}
