// Menu
import {
  Menu,
  MenuButton,
  MenuList,
  HStack,
  Text,
  MenuItem,
  Avatar,
  MenuDivider,
} from '@chakra-ui/react';

// Icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import SettingsIcon from '@material-ui/icons/Settings';

function ProfileMenu() {
  return (
    <Menu placement="bottom-end">
      <MenuButton
        as={Avatar}
        cursor="pointer"
        size="sm"
        name="Alex Jones"
        src="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg"
      />
      <MenuList>
        <MenuItem>
          <HStack>
            <AccountCircleIcon />
            <Text>Profile</Text>
          </HStack>
        </MenuItem>
        <MenuItem>
          <HStack>
            <TurnedInNotIcon />
            <Text>Saved</Text>
          </HStack>
        </MenuItem>
        <MenuItem>
          <HStack>
            <SettingsIcon />
            <Text>Settings</Text>
          </HStack>
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          <Text>Log out</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default ProfileMenu;
