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

// verify reset password code
export const checkResetCode = function(code) {
  return firebaseAuth.verifyPasswordResetCode(code);
}

// reset password
export const resetPassword = function(code, password) {
  return firebaseAuth.confirmPasswordReset(code, password);
}

// USER API CALLS

// re-auth a user
const reAuthenticate = function(email, password) {
  var credential = firebase.auth.EmailAuthProvider.credential(email, password);
  return firebaseAuth.currentUser.reauthenticateAndRetrieveDataWithCredential(credential).catch(function(error) {
    throw new Error(error.message);
  });
}

// change password
export const changePassword = function(email, password, newPassword) {
  return reAuthenticate(email, password).then(function(response) {
    return firebaseAuth.currentUser.updatePassword(newPassword).catch(function(error) {
      throw new Error(error.message);
    });
  });
}