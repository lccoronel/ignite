import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas coronel</Text>
          <Text color="gray.300" fontSize="small">lccoronel7@icloud.com</Text>
        </Box>
      )}
      
      <Avatar size="md" name="Lucas coronel" /> 
    </Flex>
  );
} 