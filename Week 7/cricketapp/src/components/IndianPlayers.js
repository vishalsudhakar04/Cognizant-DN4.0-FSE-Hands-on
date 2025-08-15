import React from 'react';

// Using Destructuring in the function parameters to get specific players
function OddPlayers({ players }) {
  const [first, , third, , fifth] = players;
  return (
    <div>
      <h3>Odd Players</h3>
      <ul>
        <li>First: {first}</li>
        <li>Third: {third}</li>
        <li>Fifth: {fifth}</li>
      </ul>
    </div>
  );
}

function EvenPlayers({ players }) {
  const [, second, , fourth, , sixth] = players;
  return (
    <div>
      <h3>Even Players</h3>
      <ul>
        <li>Second: {second}</li>
        <li>Fourth: {fourth}</li>
        <li>Sixth: {sixth}</li>
      </ul>
    </div>
  );
}

function IndianPlayers() {
  const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6'];
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

  // Using the Spread Operator (...) to merge arrays
  const IndianPlayersMerged = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <OddPlayers players={IndianTeam} />
      <hr />
      <EvenPlayers players={IndianTeam} />
      <hr />
      <h3>List of Indian Players Merged:</h3>
      <ul>
        {IndianPlayersMerged.map(player => (
          <li key={player}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;