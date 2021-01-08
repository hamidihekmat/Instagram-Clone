import { Box, Text, Spacer, IconButton, HStack } from '@chakra-ui/react';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// Component
import Profile from './Profile';

function Nav() {
  return (
    <Box w="100%" borderBottom="1px" borderColor="gray.200">
      <Box
        px={4}
        alignItems="center"
        display="flex"
        h="54px"
        as="nav"
        w={{
          sm: '100%',
          lg: '60%',
        }}
        maxWidth="975px"
        m="auto"
      >
        <Text fontSize="24px" fontWeight="700">
          Instagram
        </Text>
        <Spacer />
        <HStack>
          <IconButton
            isRound
            aria-label="Home"
            bg="white"
            icon={<HomeIcon />}
          />
          <IconButton
            isRound
            aria-label="Send Message"
            bg="white"
            icon={<SendIcon />}
          />
          <IconButton
            isRound
            aria-label="Explore More"
            bg="white"
            icon={<ExploreIcon />}
          />
          <IconButton
            isRound
            aria-label="Favorites"
            bg="white"
            icon={<FavoriteBorderIcon />}
          />
          <Profile />
        </HStack>
      </Box>
    </Box>
  );
}

// Main Box extends the whole page & has border
// Nav Box is a flex that contains Logo and IconButtons

// TODO
// ADD functionalities

export default Nav;
