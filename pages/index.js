import { Box, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box w="100%" bg="primary.bg">
      <Box
        p={4}
        w={{
          sm: '100%',
          lg: '60%',
        }}
        maxWidth="975px"
        m="auto"
      >
        <Text>Hello World</Text>
      </Box>
    </Box>
  );
}

// Todo
// Create a default container
