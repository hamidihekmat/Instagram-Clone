// Popover
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Avatar,
  Stack,
  HStack,
  Text,
  Divider,
} from '@chakra-ui/react';

// Icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import SettingsIcon from '@material-ui/icons/Settings';

function Profile() {
  return (
    <Popover variant="profile">
      <PopoverTrigger>
        <Avatar
          size="sm"
          cursor="pointer"
          name="Alex Jones"
          src="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Stack>
            <HStack>
              <AccountCircleIcon />
              <Text>Profile</Text>
            </HStack>
            <HStack>
              <TurnedInNotIcon />
              <Text>Saved</Text>
            </HStack>
            <HStack>
              <SettingsIcon />
              <Text>Settings</Text>
            </HStack>
            <Divider />
            <Text>Log out</Text>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Profile;
