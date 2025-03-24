import { useEffect } from 'react'
import { messaging } from '../firebase';
import { getToken } from "firebase/messaging";
import './App.css'

function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BE_K2Ne8TmpwEz_ThpVaUXuRybeXhJdjlE-lV2hpOpbUIQVovYhVbQGk1wpOBqtIVglTP94OQZE3g_WrG36dL6M",
      });
      console.log("Token Generated: ", token);
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, []);

  return (
    <>
      <h1>Testing Notification</h1>
      <button>Click Me</button>
    </>
  )
}

export default App