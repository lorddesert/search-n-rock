export function register (auth, setShowLogin) {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
  .then(res => setShowLogin(false))
  .catch(error => {
    switch (error.code) {
      case 'auth/email-already-in-use':
        alert('This is already in use.');
        break;

      case 'auth/invalid-email':
        alert('This email is invalid.');
        break;

      case 'auth/operation-not-allowed':
        alert('Something happen, try again with another Email or Password.');
        break;

      case 'auth/argument-error':
        alert('Firs argument "Email" should be pure text');
        break;
      case 'auth/weak-password':
        alert('The password is weak, try again with another password.');
        break;
    }
  })
}

export function login (auth, setShowLogin) {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
  .then(() => setShowLogin(false))
  .catch(error => {
    switch (error.code) {
      case 'auth/invalid-email':
        alert('This Email is not valid. Try again.');
        break;

      case 'auth/user-disabled':
        alert('This user has been disabled.');
        break;

      case 'auth/user-not-found':
        alert('User not found. Try again.');
        break;

      case 'auth/wrong-password':
        alert('Wrong password. Maybe some mayus character?');
        break;
    }
  })
}

export function signOut(setShowLogin) {
  setShowLogin(true)
}