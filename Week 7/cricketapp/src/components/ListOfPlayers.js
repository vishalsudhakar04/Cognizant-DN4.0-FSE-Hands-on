import React from 'react';

function ListOfPlayers() {
  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 }
  ];

  // Use the .filter() method to create a new array
  const playersBelow70 = players.filter(player => player.score <= 70);

  return (
    <div>
      <h1>List of Players</h1>
      <ul>
        {/* Use the .map() method to display each player */}
        {players.map(player => (
          <li key={player.name}>Mr. {player.name} <span>{player.score}</span></li>
        ))}
      </ul>

      <hr />

      <h1>List of Players having Scores Less than 70</h1>
      <ul>
        {/* Use .map() on the new filtered array */}
        {playersBelow70.map(player => (
          <li key={player.name}>Mr. {player.name} <span>{player.score}</span></li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfPlayers;