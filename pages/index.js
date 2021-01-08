import { Box, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box
      p={4}
      w={{
        sm: '100%',
        lg: '60%',
      }}
      maxWidth="975px"
      bg="primary.bg"
      m="auto"
    >
      <Text>Hello World</Text>
    </Box>
  );
}

// Todo
// Create a default container
