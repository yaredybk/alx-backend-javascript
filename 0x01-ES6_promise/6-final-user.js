import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName
) {
  Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((r) =>
    r.map(({ status, value, reason }) => {
      return { status, value: status === 'fulfilled' ? value : reason };
    })
  );
}
