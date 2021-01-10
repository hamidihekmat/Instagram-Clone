import { useRef } from 'react';
import { Box, Stack, IconButton } from '@chakra-ui/react';
// Components
import Story from './Story';

// Icons
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
// Hooks
import { useSlider } from '../hooks/useSlider';

function Stories() {
  // Test Data (Need multiples of 5s)
  const stories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const sliderRef = useRef(null);
  const { next, previous, showPrev, showNext } = useSlider(sliderRef, 2);

  return (
    <Box
      mt="16px"
      maxWidth="614px"
      h="118px"
      border="1px"
      borderColor="gray.200"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      w={{
        md: '100%',
        sm: '100%',
      }}
    >
      {showPrev && (
        <IconButton
          position="absolute"
          display={{ sm: 'none', md: 'block', lg: 'block', xl: 'block' }}
          isRound
          zIndex={4}
          left={3}
          size={'xsm'}
          bg="gray.200"
          _focus={{ outline: 'none' }}
          onClick={previous}
          icon={<KeyboardArrowLeftIcon />}
        />
      )}

      <Stack
        overflowX="scroll"
        mx="5px"
        direction="row"
        h="100%"
        ref={sliderRef}
        css={{
          '&::-webkit-scrollbar ': {
            width: '0px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'transparent',
          },
          scrollBehavior: 'smooth',
        }}
      >
        {stories.map((id) => (
          <Story
            key={id}
            image="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg"
            name="Dan Abramov
"
          />
        ))}
      </Stack>
      {showNext && (
        <IconButton
          position="absolute"
          display={{ sm: 'none', md: 'block', lg: 'block', xl: 'block' }}
          isRound
          zIndex={4}
          size={'xsm'}
          right={3}
          bg="gray.200"
          _focus={{ outline: 'none' }}
          onClick={next}
          icon={<KeyboardArrowRightIcon />}
        />
      )}
    </Box>
  );
}

export default Stories;
// TODO
// Loading State
// Make Next/Prev Buttons their own component
