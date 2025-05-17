/*
Created by Nick Hanson
Last modified: 5/17/25

This file is part of The Bullpen Report project.
The Bullpen Report is a baseball statistics viewer powered by AWS services.
It connects to a custom API built using Lambda, API Gateway, and DynamoDB,
delivering live team, player, and game data directly to the browser.
The Bullpen Report is licensed under the MIT License.
See the LICENSE file in the project root for more information.
*/

import React, { useEffect, useState } from 'react';

export function Stats() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://q18tx00gta.execute-api.us-east-2.amazonaws.com/baseballStats/')
      .then((res) => res.json())
      .then((data) => {
        const stats = JSON.parse(data.body);
        const teams = [], players = [], games = [];

        stats.forEach(item => {
          if (item.TeamID?.startsWith('TEAMINFO_')) teams.push(item);
          else if (item.TeamID?.startsWith('PLAYERINFO_')) players.push(item);
          else if (item.TeamID?.startsWith('GAMES_')) games.push(item);
        });

        setTeams(teams);
        setPlayers(players);
        setGames(games);
      });
  }, []);

  return (
    <div className="page">
      <h1>Baseball Stats</h1>
      <p>Teams: {teams.length}</p>
      <p>Players: {players.length}</p>
      <p>Games: {games.length}</p>
    </div>
  );
}