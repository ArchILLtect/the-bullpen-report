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

export function Homepage() {
  return (
        <div className="App">
            <img class="mainImage" src="images/bullpen_practice.jpg" alt="Bullpen"/>
            <h1>Welcome to The Bullpen Report</h1>
            <h2>Created by Nick Hanson - Built with React</h2>
            <h3>Version 0.1.0 - Using the Bullpen API</h3>
            
            <p class="underConstruction">🚧 This site is under construction - content coming soon 🚧</p>
        </div>
    );
}