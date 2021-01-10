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
  const [isLargerThan360] = useMediaQuery('(max-width: 375px)');
  const sliderRef = useRef(null);
  const { slideLeft, slideRight } = useSlider(sliderRef);
  // Test Data
  const stories = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <Box
      mt="16px"
      maxWidth="614px"
      h="118px"
      border="1px"
      borderColor="gray.200"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      w={{
        md: '100%',
        sm: '100%',
      }}
    >
      {!isLargerThan360 && (
        <IconButton
          position="absolute"
          isRound
          zIndex={4}
          left={3}
          size={'xsm'}
          bg="gray.200"
          _focus={{ outline: 'none' }}
          onClick={slideLeft}
          icon={<KeyboardArrowLeftIcon />}
        />
      )}

      <Stack
        overflowX="scroll"
        direction="row"
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
      {!isLargerThan360 && (
        <IconButton
          position="absolute"
          isRound
          zIndex={4}
          size={'xsm'}
          right={3}
          bg="gray.200"
          _focus={{ outline: 'none' }}
          onClick={slideRight}
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
