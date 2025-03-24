importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyAMKRxqdc1cScv6If5WpH6iazYGK_5qiEc",
    authDomain: "menu-mate-e0d9d.firebaseapp.com",
    projectId: "menu-mate-e0d9d",
    storageBucket: "menu-mate-e0d9d.appspot.com",
    messagingSenderId: "235168571982",
    appId: "1:235168571982:web:bdad0c7064c9d81f4e591f",
    measurementId: "G-YK26FHXX6N"

};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Message received!", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});