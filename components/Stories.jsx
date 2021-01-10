import {
  Box,
  HStack,
  Avatar,
  IconButton,
  useMediaQuery,
} from '@chakra-ui/react';
import { useRef } from 'react';
// Icons
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
// Hooks
import { useSlider } from '../hooks/useSlider';

function Stories() {
  const [isLargerThan360] = useMediaQuery('(max-width: 370px)');
  const sliderRef = useRef(null);
  const stories = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const { slideLeft, slideRight } = useSlider(sliderRef);
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
      {!isLargerThan360 && (
        <IconButton
          position="absolute"
          isRound
          zIndex={4}
          left={5}
          size={['xsm']}
          bg="gray.200"
          _focus={{ outline: 'none' }}
          onClick={slideLeft}
          icon={<KeyboardArrowLeftIcon />}
        />
      )}

      <HStack
        ml="16px"
        overflowX="scroll"
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
          <Avatar
            key={id}
            cursor="pointer"
            size="lg"
            name="Alex Jones"
            src="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg"
          />
        ))}
      </HStack>
      {!isLargerThan360 && (
        <IconButton
          position="absolute"
          isRound
          zIndex={4}
          size={['xsm']}
          right={5}
          bg="gray.200"
          _focus={{ outline: 'none' }}
          onClick={slideRight}
          icon={<KeyboardArrowRightIcon />}
        />
      )}
    </Box>
  );
}

// TODO
// ADD PREV/NEXT Buttons
export default Stories;
