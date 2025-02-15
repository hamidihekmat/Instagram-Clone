import {
  Box,
  HStack,
  Avatar,
  Spacer,
  IconButton,
  Image,
} from '@chakra-ui/react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MoreAlert from './MoreAlert';

function Post() {
  return (
    <Box w="100%" bg="white">
      <Box borderBottom="1px" borderColor="gray.200">
        <HStack mx="1rem" h="60px" alignItems="center">
          <Avatar
            cursor="pointer"
            size="sm"
            name="Alex Jones"
            src="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg"
          />
          <Spacer />
          <MoreAlert />
        </HStack>
      </Box>
      {/* Images */}
      <Image
        w="100%"
        backgroundPosition="center"
        src="https://picsum.photos/id/225/600/600"
      />
      {/* Modal */}
    </Box>
  );
}

// Use popper for more

export default Post;
