react-firebase-auth
=================

This is a firebase react app for authentication. You can [demo it on glitch](https://react-firebase-auth.glitch.me). Users can register, log in and log out. It checks if a user is authentication before authorising them to see certain routes, like the dashboard or account pages.

It uses [firebase](https://firebase.google.com/) for email and password authentication.

I've used [bootstrap v4](https://getbootstrap.com/) but this can be replaced with another framework or custom css.

---

Get Started
------------
### Setup

First, you need to create a new [firebase](https://firebase.google.com/) project. In the [Firebase console](https://console.firebase.google.com/), open the Authentication section and enable email and password authentication.

Now, connect your firebase project to the app. Get the firebase config object (from your [firebase project](https://console.firebase.google.com/)) and enter the details as environment variables. Usually add these in a `.env` file, depending on your development environment. 

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
