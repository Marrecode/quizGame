import React from 'react';
import {db } from './modules/firebase';

db.collection("music_quiz").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
      console.log(doc.id, " => ", doc.data());
  });
});


function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;