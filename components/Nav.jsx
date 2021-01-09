import Link from 'next/link';
import { Box, Text, Spacer, IconButton, HStack } from '@chakra-ui/react';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// Component
import Profile from './Profile';
// Variants
import { containerWidth, containerMaxWidth } from '../utils/variants';
function Nav() {
  return (
    <Box w="100%" borderBottom="1px" borderColor="gray.200">
      <Box
        px={4}
        alignItems="center"
        display="flex"
        h="54px"
        as="nav"
        w={containerWidth}
        maxWidth={containerMaxWidth}
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
          {/* Favorites */}
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
import { formatMs } from '@material-ui/core';

// Main Box extends the whole page & has border
// Nav Box is a flex that contains Logo and IconButtons

// TODO
// ADD functionalities

export default Nav;
