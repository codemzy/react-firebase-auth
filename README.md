react-firebase-auth
=================

This is a firebase react app for authentication. Users can register, log in and log out. It checks if a user is authentication before authorising them to see certain routes, like the dashboard or account pages. It uses [firebase](https://firebase.google.com/) for email and password authentication, which is a super quick and easy way to set up authentication if you don't want to roll your own.

For the design, I've used [bootstrap v4](https://getbootstrap.com/) but this can be replaced with another framework or custom css.

You can [demo it here](https://codemzy.github.io/react-login/). The demo is just a dummy (not wired up to firebase) so you can enter any email address and password to log in and register. It won't store your details in the demo. Read the **Get Started** section below to set up the app with firebase.

---

Get Started
------------
### Setup

First, you need to create a new [firebase](https://firebase.google.com/) project. In the [Firebase console](https://console.firebase.google.com/), open the Authentication section and enable email and password authentication.

Now, connect your firebase project to the app. Get the firebase config object (from your [firebase project](https://console.firebase.google.com/)) and enter the details as environment variables. Unless otherwise directed by your development environment, add these in a `.env` file at the root of this project (same level as this README) - like this (but with your own values from your project):

```
FIREBASE_API_KEY=your-key
FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
FIREBASE_DATABASE_URL=https://your-project.firebaseio.com
FIREBASE_PROJECT_ID=your-project
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=sender-id
```

Your firebase project is now connected. Next you might want to go to `src/app/config/settings.js` and update the appName. This will display in the title, menu and footer of the app.

### Build

```
npm run start
```
Will build a dev bundle and start the dev server.

```
npm run build
```
Will build a production bundle.

---

Dependencies
------------

- [ReactJS](https://reactjs.org/) *javascript framework*
- [Firebase](https://firebase.google.com/) *authentication*
- [React Router v4](https://reacttraining.com/react-router/) *routing*
- [Validator](https://www.npmjs.com/package/validator) *for some simple validation*
- [Parcel](https://parceljs.org/) *simple builder - no config*
