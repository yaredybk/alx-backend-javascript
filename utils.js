
/**
 * dummy upload photo function
 * @returns {Promise<{status: 200,body: 'photo-profile-1'}>}
 */
export function uploadPhoto() {
    return Promise.resolve({
      status: 200,
      body: 'photo-profile-1',
    });
  }
  
  
  /**
 * dummy create user function
 * @returns {Promise<{firstName: 'Guillaume', lastName: 'Salva'}>}
 */
  export function createUser() {
    return Promise.resolve({
      firstName: 'Guillaume',
      lastName: 'Salva',
    });
  }