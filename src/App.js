import React from 'react';
import {db } from './modules/firebase';
import Quiz from './Quiz';
import './index.scss';

db.collection("music_quiz").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
      console.log(doc.id, " => ", doc.data());
  });
});

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


function App() {
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}

export default App;