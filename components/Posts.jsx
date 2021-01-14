import { Box } from '@chakra-ui/react';
import Post from './Post';

function Posts() {
  return (
    <Box
      maxWidth="614px"
      w="614px"
      mt="20px"
      w={{
        md: '100%',
        sm: '100%',
      }}
      border="1px"
      borderColor="gray.200"
      mx={{ sm: 'auto', md: 'auto', lg: '0', xl: '0' }}
    >
      <Post />
    </Box>
  );
}

export default Posts;
