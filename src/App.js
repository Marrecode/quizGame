import React from 'react';
<<<<<<< HEAD
import {db } from './modules/firebase';

db.collection("music_quiz").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
=======
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
>>>>>>> quizgame
      console.log(doc.id, " => ", doc.data());
  });
});

<<<<<<< HEAD
const postData = () => {
  const citiesRef = db.collection("cities");

citiesRef.doc("SF").set({
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
citiesRef.doc("LA").set({
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
citiesRef.doc("DC").set({
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
citiesRef.doc("TOK").set({
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
citiesRef.doc("BJ").set({
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });

}

postData();
=======



>>>>>>> quizgame


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD

=======
      <h1>Hej</h1>
      <h2>DÅ</h2>
>>>>>>> quizgame
=======
>>>>>>> c82bfbbd926992e105ddefd760509db09da3e229
    </div>
  );
}

export default App;
