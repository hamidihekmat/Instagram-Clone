import { Box } from '@chakra-ui/react';
import SideBar from '../components/SideBar';
import Stories from '../components/Stories';
// Reusable
import { MainContainer } from '../utils/resusable';

export default function Home() {
  return (
    <Box w="100%" bg="primary.bg">
      <MainContainer m="auto" position="relative">
        <Stories />
        <SideBar />
      </MainContainer>
    </Box>
  );
}
