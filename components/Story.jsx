import { Avatar, Box, Text } from '@chakra-ui/react';

// ID is used for tabindex

function Story({ name, image, id }) {
  return (
    <Box maxWidth="62px" mx="5px">
      <Avatar
        tabIndex={id}
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
