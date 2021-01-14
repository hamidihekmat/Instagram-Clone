import { Box } from '@chakra-ui/react';
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions';

function SideBar() {
  return (
    <Box
      right="0"
      top="18px"
      position="absolute"
      w="293px"
      display={{
        xl: 'block',
        lg: 'block',
        md: 'none',
        sm: 'none',
        base: 'none',
      }}
    >
      <MiniProfile />
      <Suggestions />
    </Box>
  );
}

export default SideBar;
