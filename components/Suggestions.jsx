import { Box, Text, Stack, Spacer } from '@chakra-ui/react';
import Suggested from './Suggested';

function Suggestions() {
  const suggested = [0, 1, 2, 3, 4];
  return (
    <Box>
      <Stack mx="10px" direction="row">
        <Text fontSize="14px" color="#8e8e8e" fontWeight="600">
          Suggestions For You
        </Text>
        <Spacer />
        <Text fontSize="12px" color="#262626" fontWeight="600">
          See All
        </Text>
      </Stack>
      {/* Suggestions */}
      {suggested.map((id) => (
        <Suggested key={id} />
      ))}
    </Box>
  );
}

export default Suggestions;
