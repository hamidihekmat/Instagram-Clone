// Menu
import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  MenuItem,
  Image,
} from '@chakra-ui/react';
import { Favorite } from '@material-ui/icons';
// Icon
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// React
import { useState } from 'react';

function FavoriteMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu placement="bottom-end">
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        as={IconButton}
        bg="white"
        isRound
        icon={isOpen ? <Favorite /> : <FavoriteBorderIcon />}
      />
      <MenuList>
        <MenuItem minH="48px">
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="https://placekitten.com/100/100"
            alt="Fluffybuns the destroyer"
            mr="12px"
          />
          <span>Fluffybuns the Destroyer</span>
        </MenuItem>
        <MenuItem minH="40px">
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="https://placekitten.com/120/120"
            alt="Simon the pensive"
            mr="12px"
          />
          <span>Simon the pensive</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

// TODO
// Add functionalities

export default FavoriteMenu;
