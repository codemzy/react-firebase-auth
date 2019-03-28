import {firebaseAuth} from '../config/firebase';

// fake user requests - wire this up to a real api
  // for now this just fakes api requests with a timeout

// fake user info
let dummyUser = { firstName: "Fake", lastName: "User", email: "fake.user@email.com" };

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

// fake forgot password 
export const forgotPassword = function(email) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve();
    }, 2000);
  });
};