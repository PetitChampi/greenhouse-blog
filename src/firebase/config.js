import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD-StLHLWQ1hlPL0VTHd-a7enxXhSVroSs",
  authDomain: "greenhouse-blog.firebaseapp.com",
  projectId: "greenhouse-blog",
  storageBucket: "greenhouse-blog.appspot.com",
  messagingSenderId: "416286372332",
  appId: "1:416286372332:web:567338e51cc373d000d0c9"
}

// Init Firebase
const app = initializeApp(firebaseConfig)

// init firestore
const db = getFirestore(app)

export { db }