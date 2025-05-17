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

import React from 'react';

export default function About() {
  return (
    <div className="page">
      <h1>About The Bullpen Report</h1>
      <p>
        The Bullpen Report is a baseball statistics viewer powered by AWS services.
        It connects to a custom API built using Lambda, API Gateway, and DynamoDB,
        delivering live team, player, and game data directly to the browser.
      </p>
    </div>
  );
}