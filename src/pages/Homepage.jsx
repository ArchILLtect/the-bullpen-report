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
import { Heading, Text, Box, Image } from "@chakra-ui/react";

export function Homepage() {
    return (
        <Box textAlign="center" mt={8}>
            <Image src="images/bullpen_practice.jpg" alt="Bullpen" mx="auto" maxW="800px" borderRadius="md" />
            <Heading mt={4} color="blue.600">Welcome to The Bullpen Report</Heading>
            <Text fontSize="lg" mt={2} color="gray.600">Created by Nick Hanson - Built with React</Text>
            <Text fontSize="md" color="gray.500">Version 0.1.0 - Using the Bullpen API</Text>
            <Text mt={6} fontWeight="medium">This app is styled with Chakra UI — sleek, modern, and dev-friendly.</Text>
            <Box mt={6} bg="gray.800" color="orange.300" p={4} borderRadius="md" fontSize="xl">
                🚧 This site is under construction - content coming soon 🚧
            </Box>
        </Box>
        );
}