import { Avatar, Box, Text } from '@chakra-ui/react';

function Story({ name, image }) {
  return (
    <Box maxWidth="62px" mx="5px">
      <Avatar
        mt="20px"
        cursor="pointer"
        size="lg"
        name="Alex Jones"
        css={{
          border: '1px solid pink',
        }}
        src={image}
      />
      <Text fontSize="11px" isTruncated>
        {name}
      </Text>
    </Box>
  );
}

export default Story;
