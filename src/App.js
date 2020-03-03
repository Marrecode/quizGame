import React from 'react';
import './App.css';
import {db } from './modules/firebase';

/*db.collection("music_quiz").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});*/

db.collection("music_quiz").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
  });
});






function App() {
  return (
    <div className="App">
      <h1>Hej</h1>
      <h2>DÅ</h2>
    </div>
  );
}

export default App;
