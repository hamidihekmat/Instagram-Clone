import { Box } from '@chakra-ui/react';
import Posts from '../components/Posts';
import SideBar from '../components/SideBar';
import Stories from '../components/Stories';
// Reusable
import { MainContainer } from '../utils/resusable';

export default function Home() {
  return (
    <Box w="100%" bg="primary.bg" pt="54px">
      <MainContainer m="auto" position="relative" overflowY="scroll">
        <Stories />
        <SideBar />
        <Posts />
      </MainContainer>
    </Box>
  );
}
