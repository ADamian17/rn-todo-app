// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


export class DataBaseReference {
  constructor (id) {
    this.id = id
  }

  getReference() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyAWBzfpoqUBZuCX2H46cKXWnkuHeCRsgb0",
      authDomain: "rn-todo-app-fbf7f.firebaseapp.com",
      databaseURL: "https://rn-todo-app-fbf7f-default-rtdb.firebaseio.com",
      projectId: "rn-todo-app-fbf7f",
      storageBucket: "rn-todo-app-fbf7f.appspot.com",
      messagingSenderId: "825150480902",
      appId: "1:825150480902:web:b068f9366f0e7eb01fd987",
      measurementId: "G-QGCELTM5MT"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    return ref(db, this.id);
  }

  save(data, callback) {
    set(this.getReference(), data).then(callback);
  }

  getListener(callback) {
    onValue(this.getReference(), (snapshot) => {
      const data = snapshot.val();
      console.log(`Tasks: ${snapshot.toJSON}`);
      return callback(data)
    });
  }
  
}

