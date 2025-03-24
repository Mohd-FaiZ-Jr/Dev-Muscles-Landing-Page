import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAMKRxqdc1cScv6If5WpH6iazYGK_5qiEc",
    authDomain: "menu-mate-e0d9d.firebaseapp.com",
    projectId: "menu-mate-e0d9d",
    storageBucket: "menu-mate-e0d9d.appspot.com",
    messagingSenderId: "235168571982",
    appId: "1:235168571982:web:bdad0c7064c9d81f4e591f",
    measurementId: "G-YK26FHXX6N"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
