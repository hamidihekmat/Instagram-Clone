import Link from 'next/link';
import { useRouter } from 'next/router';

// ChakraUI
import { Box, Text, Spacer, IconButton, HStack } from '@chakra-ui/react';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SendIcon from '../public/SVG/sendfull.svg';
import SendOutlinedIcon from '../public/SVG/send.svg';
import ExploreIcon from '@material-ui/icons/Explore';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
// Component
import ProfileMenu from './ProfileMenu';
import FavoriteMenu from './FavoriteMenu';
// Reusable Container
import { MainContainer } from '../utils/resusable';

function Nav() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <Box
      w="100%"
      bg="primary.bg"
      borderBottom="1px"
      borderColor="gray.200"
      zIndex={99}
      position="fixed"
    >
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
              _focus={{ outline: 'none' }}
              isRound
              aria-label="Home"
              bg="white"
              icon={path === '/' ? <HomeIcon /> : <HomeOutlinedIcon />}
            />
          </Link>
          {/* Messages */}
          <Link href="/messages">
            <IconButton
              _focus={{ outline: 'none' }}
              isRound
              aria-label="Send Message"
              bg="white"
              icon={path === '/messages' ? <SendIcon /> : <SendOutlinedIcon />}
            />
          </Link>
          {/* Explore */}
          <Link href="/explore">
            <IconButton
              _focus={{ outline: 'none' }}
              isRound
              aria-label="Explore More"
              bg="white"
              icon={
                path === '/explore' ? <ExploreIcon /> : <ExploreOutlinedIcon />
              }
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
