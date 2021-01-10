import { Box } from '@chakra-ui/react';

// Responsive Container
export function MainContainer(props) {
  return (
    <Box
      px={4}
      width={{
        sm: '100%',
        md: '100%',
        xl: '975px',
      }}
      maxWidth={'975px'}
      {...props}
    >
      {props.children}
    </Box>
  );
}

// Stories Avatar
