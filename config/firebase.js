import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// import Constants from "expo-constants";

// Firebase config
const firebaseConfig = {
  // apiKey: Constants.expoConfig.extra.apiKey,
  // authDomain: Constants.expoConfig.extra.authDomain,
  // projectId: Constants.expoConfig.extra.projectId,
  // storageBucket: Constants.expoConfig.extra.storageBucket,
  // messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
  // appId: Constants.expoConfig.extra.appId,
  // measurementId: Constants.expoConfig.extra.measurementId,

  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
  // databaseURL: Constants.expoConfig.extra.databaseURL,
  //   @deprecated is deprecated Constants.manifest
};
// initialize firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const database = getFirestore();
