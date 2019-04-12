import firebase from 'firebase/app';
import {firebaseAuth} from '../config/firebase';

// check if use is authenticated (logged in)
export const checkAuth = function(callback) {
  // firebase listener for auth changes
  firebaseAuth.onAuthStateChanged(function(user) {
    return callback(user);
  });
};

// register a user
export const userRegister = function(email, password) {
  return firebaseAuth.createUserWithEmailAndPassword(email, password).then(function(result) {
      return result;
    }).catch(function(error) {
      throw new Error(error.message);
    });
};

// log in a user
export const userLogin = function(email, password) {
  return firebaseAuth.signInWithEmailAndPassword(email, password).catch(function(error) {
    throw new Error(error.message);
  });
};

// log out a user
export const userLogout = function() {
  return firebaseAuth.signOut();
};

// forgot password email
export const forgotPassword = function(email) {
  return firebaseAuth.sendPasswordResetEmail(email);
};

// ----------- ACTION CODE HANDLERS ----------- //

// verify reset password code
export const checkResetCode = function(code) {
  return firebaseAuth.verifyPasswordResetCode(code);
}

// reset password
export const resetPassword = function(code, password) {
  return firebaseAuth.confirmPasswordReset(code, password);
}

// email change revocation
export const restoreEmail = function(code) {
  return firebaseAuth.checkActionCode(code).then(function(info) {
    return firebaseAuth.applyActionCode(code).then(function(response) {
      return info['data']['email']; // the restored email address
    });
  }).catch(function(error) {
    throw new Error(error.message);
  });
}

// verify email address
export const verifyEmail = function(code) {
  return firebaseAuth.applyActionCode(code).then(function(response) {
    return firebaseAuth.currentUser.reload(); // reload user to show new verification status
  });
}


// ----------- USER API CALLS ----------- //

// re-auth a user
const reAuthenticate = function(password) {
  var credential = firebase.auth.EmailAuthProvider.credential(firebaseAuth.currentUser.email, password);
  return firebaseAuth.currentUser.reauthenticateAndRetrieveDataWithCredential(credential).catch(function(error) {
    throw new Error(error.message);
  });
}

// change password
export const changePassword = function(password, newPassword) {
  return reAuthenticate(password).then(function(response) {
    return firebaseAuth.currentUser.updatePassword(newPassword).catch(function(error) {
      throw new Error(error.message);
    });
  });
}

// change email
export const changeEmail = function(password, newEmail) {
  return reAuthenticate(password).then(function(response) {
    return firebaseAuth.currentUser.updateEmail(newEmail).catch(function(error) {
      throw new Error(error.message);
    });
  });
}

// send verification email
export const sendVerification = function() {
  return firebaseAuth.currentUser.sendEmailVerification();
}