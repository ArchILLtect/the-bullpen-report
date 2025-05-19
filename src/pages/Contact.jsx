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
import { Heading, Text, Box, Input, Button, Textarea, VStack } from "@chakra-ui/react";

export function Contact() {
    return (
        <Box p={8}>
            <Heading mb={4}>Contact Us</Heading>
            <Text mb={2}>Have feedback or ideas?</Text>
            <VStack spacing={4} align="stretch" maxW="400px">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" />
                <Textarea placeholder="Your Message" />
                <Button colorScheme="blue" alignSelf="flex-start">Send</Button>
            </VStack>
        </Box>
    );
}