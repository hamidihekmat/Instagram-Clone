import Link from 'next/link';
// ChakraUI
import { Box, Text, Spacer, IconButton, HStack } from '@chakra-ui/react';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import ExploreIcon from '@material-ui/icons/Explore';

// Component
import ProfileMenu from './ProfileMenu';
import FavoriteMenu from './FavoriteMenu';
// Reusable Container
import { MainContainer } from '../utils/resusable';

function Nav() {
  return (
    <Box w="100%" borderBottom="1px" borderColor="gray.200">
      <MainContainer
        alignItems="center"
        display="flex"
        h="54px"
        as="nav"
        m="auto"
      >
        <Link href="/">
          <Text cursor="pointer" fontSize="34px" fontFamily="Billabong">
            Instagram
          </Text>
        </Link>

        <Spacer />
        <HStack>
          {/* Home */}
          <Link href="/">
            <IconButton
              isRound
              aria-label="Home"
              bg="white"
              icon={<HomeIcon />}
            />
          </Link>
          {/* Messages */}
          <Link href="/messages">
            <IconButton
              isRound
              aria-label="Send Message"
              bg="white"
              icon={<SendIcon />}
            />
          </Link>
          {/* Explore */}
          <Link href="/explore">
            <IconButton
              isRound
              aria-label="Explore More"
              bg="white"
              icon={<ExploreIcon />}
            />
          </Link>
          {/* Menus */}
          <FavoriteMenu />
          <ProfileMenu />
        </HStack>
      </MainContainer>
    </Box>
  );
}

// Main Box extends the whole page & has border
// Nav Box is a flex that contains Logo and IconButtons

// TODO
// ADD functionalities

export default Nav;
