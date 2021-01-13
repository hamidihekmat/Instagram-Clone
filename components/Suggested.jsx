import { Text, Stack, Spacer, Avatar } from '@chakra-ui/react';

function Suggested() {
  return (
    <Stack direction="row" width="273px" mx="auto" mt="12px">
      <Avatar
        cursor="pointer"
        size="sm"
        name="Alex Jones"
        src="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg"
      />
      <Stack direction="column" justifyContent="center">
        <Text fontSize="14px" lineHeight="12px" fontWeight="600">
          danbramov
        </Text>
        <Text fontSize="12px" lineHeight="12px" color="#8e8e8e">
          New to Instagram
        </Text>
      </Stack>
      <Spacer />
      <Stack direction="column" justifyContent="center">
        <Text fontSize="12px" fontWeight="600" color="#0095f6">
          Follow
        </Text>
      </Stack>
    </Stack>
  );
}

export default Suggested;
