import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  IconButton,
  VStack,
  Divider,
  Text,
} from '@chakra-ui/react';

// Icons
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

// React
import { useRef, useState } from 'react';

function MoreAlert() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  return (
    <>
      <IconButton
        isRound
        aria-label="Show more"
        bg="white"
        _hover={{ background: 'white' }}
        _focus={{ outline: 'none' }}
        icon={<MoreHorizIcon />}
        onClick={() => setIsOpen(true)}
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <VStack>
              <Text
                fontWeight="700"
                fontSize="14px"
                lineHeight="21px"
                color="#ed4956"
                padding="0.5rem"
              >
                Report
              </Text>
              <Divider />
              <Text
                fontWeight="700"
                fontSize="14px"
                lineHeight="21px"
                color="#ed4956"
                padding="0.5rem"
              >
                Unfollow
              </Text>
              <Divider />
              <Text padding="0.5rem">Go to post</Text>
              <Divider />
              <Text padding="0.5rem">Share to...</Text>
              <Divider />
              <Text padding="0.5rem">Copy Link</Text>
              <Divider />
              <Text padding="0.5rem">Embed</Text>
              <Divider />
              <Text padding="0.5rem" cursor="pointer" onClick={onClose}>
                Cancel
              </Text>
              <Divider />
            </VStack>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

// TODO
// Accept custom props

export default MoreAlert;
