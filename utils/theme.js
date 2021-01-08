import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
});

export const theme = extendTheme({
  breakpoints,
  colors: {
    primary: {
      bg: '#FAFAFA',
    },
  },
  components: {
    Popover: {
      variants: {
        profile: {
          popper: {
            maxWidth: '170px',
            width: '170px',
          },
        },
      },
    },
  },
});
