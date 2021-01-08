import { Box, Text } from '@chakra-ui/react';
import { containerMaxWidth, containerWidth } from '../utils/variants';

export default function Explore() {
  return (
    <Box w="100%" bg="primary.bg">
      <Box p={4} w={containerWidth} maxWidth={containerMaxWidth} m="auto">
        <Text>Explore Page</Text>
      </Box>
    </Box>
  );
}

// Todo
// Create a default container
