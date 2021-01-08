import { Box, Text } from '@chakra-ui/react';
import { containerMaxWidth, containerWidth } from '../utils/variants';

export default function Home() {
  return (
    <Box w="100%" bg="primary.bg">
      <Box p={4} w={containerWidth} maxWidth={containerMaxWidth} m="auto">
        <Text>Hello World</Text>
      </Box>
    </Box>
  );
}
