import { Box, Text } from '@chakra-ui/react';
// Reusable
import { MainContainer } from '../utils/resusable';

export default function Home() {
  return (
    <Box w="100%" bg="primary.bg">
      <MainContainer m="auto">
        <Text>Hello World</Text>
      </MainContainer>
    </Box>
  );
}
