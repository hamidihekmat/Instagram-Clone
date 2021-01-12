import { Box } from '@chakra-ui/react';
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions';

function SideBar() {
  return (
    <Box
      right="0"
      top="0"
      position="absolute"
      w="293px"
      display={{ xl: 'block', lg: 'block', md: 'none', sm: 'none' }}
    >
      <MiniProfile />
      <Suggestions />
    </Box>
  );
}

export default SideBar;
