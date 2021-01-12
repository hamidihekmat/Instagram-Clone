import { IconButton } from '@chakra-ui/react';

function SliderButton(props) {
  return (
    <IconButton
      position="absolute"
      display={{ sm: 'none', md: 'block', lg: 'block', xl: 'block' }}
      isRound
      zIndex={4}
      size={'xsm'}
      bg="gray.200"
      _focus={{ outline: 'none' }}
      {...props}
    />
  );
}

export default SliderButton;
