import { Avatar, Box, Text } from '@chakra-ui/react';

// ID is used for tabindex

function Story({ userName, src }) {
  return (
    <Box maxWidth="62px" mx="5px">
      <Avatar
        // tabIndex={id}
        mt="20px"
        cursor="pointer"
        size="lg"
        name="Alex Jones"
        css={{
          border: '1px solid pink',
        }}
        src={src}
      />
      <Text fontSize="11px" isTruncated>
        {userName}
      </Text>
    </Box>
  );
}

export default Story;
