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
import { Heading, Text, Box } from "@chakra-ui/react";

export function Homepage() {
  return (
        <Box p={8}>
            <img className="mainImage" src="images/bullpen_practice.jpg" alt="Bullpen"/>
            <Heading as="h1" size="xl" color="blue.600">
                Welcome to The Bullpen Report
            </Heading>
            <h2>Created by Nick Hanson - Built with React</h2>
            <h3>Version 0.1.0 - Using the Bullpen API</h3>
            <Text mt={4}>
                This app is styled with Chakra UI — sleek, modern, and dev-friendly.
            </Text>
            
            <p className="underConstruction">🚧 This site is under construction - content coming soon 🚧</p>
        </Box>
    );
}