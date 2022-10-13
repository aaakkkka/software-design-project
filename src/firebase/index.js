import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB0LKmrUE3CXZQ2WmV5AreA0qc0Hd1pXxw",
  authDomain: "software-design-a.firebaseapp.com",
  projectId: "software-design-a",
  storageBucket: "software-design-a.appspot.com",
  messagingSenderId: "959200053145",
  appId: "1:959200053145:web:5b7651638e56cea0d8b508"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }