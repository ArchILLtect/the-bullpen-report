import React, { useEffect, useState } from "react";
import {
    Box,
    Flex,
    Heading,
    Center,
    Button,
    Text,
    VStack,
    HStack,
    Table,
    useDisclosure,
    Dialog,
    CloseButton,
    Portal,
    Input,
} from "@chakra-ui/react";

const API_URL = "https://q18tx00gta.execute-api.us-east-2.amazonaws.com/baseballStats/";

const Stats = () => {
    const [teams, setTeams] = useState([]);
    const [players, setPlayers] = useState([]);
    const [games, setGames] = useState([]);

    const [formData, setFormData] = useState({
        TeamName: "",
        TeamID: "",
        SK: "",
    });

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            const stats = JSON.parse(data.body);
            const newTeams = [],
            newPlayers = [],
            newGames = [];

            stats.forEach((item) => {
            if (item.TeamID.startsWith("TEAMINFO_")) newTeams.push(item);
            else if (item.TeamID.startsWith("PLAYERINFO_")) newPlayers.push(item);
            else if (item.TeamID.startsWith("GAMES_")) newGames.push(item);
            });

            setTeams(newTeams);
            setPlayers(newPlayers);
            setGames(newGames);
        })
        .catch((error) => console.error("Error fetching stats:", error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Team added successfully!");
            window.location.reload();
        } else {
            alert("Failed to add team.");
        }
        } catch (err) {
        console.error("Submission error:", err);
        }
        onClose();
    };

    const getTeamName = (teamID) => {
        if (teamID.includes("GAMES_")) teamID = teamID.replace("GAMES_", "");
        const team = teams.find((t) => t.SK === teamID);
        return team ? team.TeamName : "Unknown Team";
    };

    return (
        <Box p={10}>
            <Center>
                <Heading mb={4}>Baseball Stats</Heading>
            </Center>

            <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <Flex justify="flex-end" my={4} pr={5}>
                        <Button size="sm" colorPalette="blue">
                            Add Team
                        </Button>
                        </Flex>
                    </Dialog.Trigger>
                    <Portal>
                        <Dialog.Backdrop />
                        <Dialog.Positioner>
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Add New Team</Dialog.Title>
                                </Dialog.Header>
                                <form onSubmit={handleSubmit}>
                                <Dialog.Body>
                                    <VStack spacing={4}>
                                        <Input placeholder="Team Name" name="TeamName" value={formData.TeamName} onChange={handleChange} required />
                                        <Input placeholder="Team ID" name="TeamID" value={formData.TeamID} onChange={handleChange} required />
                                        <Input placeholder="SK" name="SK" value={formData.SK} onChange={handleChange} required />
                                    </VStack>
                                </Dialog.Body>
                                <Dialog.Footer>
                                    <Button colorScheme="blue" mr={3} type="submit">Add Team</Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </Dialog.Footer>
                                </form>
                                <Dialog.CloseTrigger asChild>
                                    <CloseButton size="sm" />
                                </Dialog.CloseTrigger>
                            </Dialog.Content>
                        </Dialog.Positioner>
                    </Portal>
                </Dialog.Root>

        <Box mt={9}>
            <HStack h="35px" w="100%" gap="0">
                <Heading
                    size="md"
                    bg="white"
                    px={4}
                    py={2}
                    borderTopRadius="md"
                    position="relative"
                    zIndex={1}
                    borderTopWidth="6px"
                    borderRightWidth="6px"
                    borderLeftWidth="6px"
                    borderColor="gray.500"
                >
                    Teams: {teams.length}
                </Heading>
            </HStack>
            <VStack align="start" spacing={3} p={4} borderWidth="6px" borderColor="gray.500">
            {teams.map((team) => (
                <Box key={team.SK} borderWidth="1px" p={3} w="100%">
                <HStack justify="space-between">
                    <Box>
                        <Heading size="sm">{team.TeamName}</Heading>
                        <Text>ID: {team.TeamID}</Text>
                    </Box>
                    <HStack>
                        <Button size="sm" onClick={() => alert("Edit not implemented")}>Edit</Button>
                        <Button size="sm" colorPalette="red" onClick={() => alert("Delete not implemented")}>🗑️</Button>
                    </HStack>
                </HStack>
                </Box>
            ))}
            </VStack>
        </Box>

        <Box mt={6}>
            <HStack h="35px" w="100%" gap="0">
                <Heading
                    size="md"
                    bg="white"
                    px={4}
                    py={2}
                    borderTopRadius="md"
                    position="relative"
                    zIndex={1}
                    borderTopWidth="6px"
                    borderRightWidth="6px"
                    borderLeftWidth="6px"
                    borderColor="gray.500"
                >
                    Players: {players.length}</Heading>
            </HStack>
            <VStack align="start" spacing={3} p={4} borderWidth="6px" borderColor="gray.500">
            {players.map((player) => (
                <Box key={player.SK} borderWidth="1px" p={3} w="100%">
                <HStack justify="space-between">
                    <Box>
                    <Heading size="sm">{player.PlayerName}</Heading>
                    <Text>Team: {player.TeamID}</Text>
                    </Box>
                    <HStack>
                    <Button size="sm" onClick={() => alert("Edit not implemented")}>Edit</Button>
                    <Button size="sm"  colorPalette="red" onClick={() => alert("Delete not implemented")}>🗑️</Button>
                    </HStack>
                </HStack>
                </Box>
            ))}
            </VStack>
        </Box>

        <Box mt={6}>
            <HStack h="35px" w="100%" gap="0">
                <Heading
                    size="md"
                    bg={"lightGrey"}
                    px={4}
                    py={2}
                    borderTopRadius="md"
                    position="relative"
                    zIndex={1}
                    borderTopWidth="6px"
                    borderRightWidth="6px"
                    borderLeftWidth="6px"
                    borderColor="gray.500"
                >
                    Games: {games.length}</Heading>
            </HStack>
            <Table.Root striped p={4} borderWidth="6px" borderColor="gray.500">
            <Table.Header>
                <Table.Row>
                <Table.ColumnHeader bg={"lightGrey"}>Home</Table.ColumnHeader>
                <Table.ColumnHeader bg={"lightGrey"}>Runs</Table.ColumnHeader>
                <Table.ColumnHeader bg={"lightGrey"}></Table.ColumnHeader>
                <Table.ColumnHeader bg={"lightGrey"}>Away</Table.ColumnHeader>
                <Table.ColumnHeader bg={"lightGrey"}>Runs</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {games.map((game) => (
                <Table.Row key={game.SK}>
                    <Table.Cell>{getTeamName(game.TeamID)}</Table.Cell>
                    <Table.Cell>{game.Runs}</Table.Cell>
                    <Table.Cell>vs</Table.Cell>
                    <Table.Cell>{getTeamName(game.OpposingTeamID)}</Table.Cell>
                    <Table.Cell>{game.OpposingTeamRuns}</Table.Cell>
                </Table.Row>
                ))}
            </Table.Body>
            </Table.Root>
        </Box>

        
        </Box>
    );
};

export default Stats;