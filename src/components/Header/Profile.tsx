import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && <Box mr="4" text-align="right">
        <Text>Guilherme</Text>
        <Text color="gray.300" fontSize="small">
          guilhermecamargo90@hotmail.com
        </Text>
      </Box>}

      <Avatar size="md" name="Guilherme Camargo" src="https://github.com/guiprj.png" />
    </Flex>
  )
}