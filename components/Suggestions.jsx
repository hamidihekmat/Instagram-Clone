import { Box, Text, Stack, Spacer } from '@chakra-ui/react';

function Suggestions() {
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
    </Box>
  );
}

export default Suggestions;
