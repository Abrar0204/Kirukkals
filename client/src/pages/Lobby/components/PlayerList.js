import React from "react";
import { Box, Heading, Avatar, Text } from "@chakra-ui/react";
const PlayerList = ({ players }) => {
	return (
		<Box margin="4">
			<Heading as="h2" size="lg">
				Players
			</Heading>
			<Box marginTop="2">
				{Object.values(players).map(player => (
					<Box
						key={player.id}
						display="flex"
						alignItems="center"
						margin="2"
						padding="2"
						border="ActiveBorder"
					>
						<Avatar name={player.playerName} marginRight="4" />
						<Text as="h3" size="md">
							{player.playerName}
						</Text>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default PlayerList;
