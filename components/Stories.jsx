import { useRef } from 'react';
import { Box, Stack, IconButton, useMediaQuery } from '@chakra-ui/react';
// Components
import Story from './Story';

// Icons
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
// Hooks
import { useSlider } from '../hooks/useSlider';

function Stories() {
  // Test Data (Need multiples of 5s)
  const stories = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
  ];
  // View is the view width which the carousel will go to
  // 20 is length of stories we divide it by length of items in view
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
            id={id}
            image="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg"
            name="Dan Abramov
"
          />
        ))}
      </Stack>
      {showNext && (
        <IconButton
          position="absolute"
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
// ADD PREV/NEXT Buttons
// Add functionalities
// Loading State
