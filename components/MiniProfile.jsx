import { Stack, Text, Avatar, Spacer } from '@chakra-ui/react';

function MiniProfile() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      mx="10px"
      mt="10px"
      height="90px"
    >
      <Avatar
        cursor="pointer"
        size="lg"
        name="Alex Jones"
        src="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg"
      />
      <Stack
        pl="8px"
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
        width="180px"
        isTruncated
      >
        <Text
          fontSize="14px"
          textAlign="start"
          fontWeight="bold"
          lineHeight="14px"
        >
          danabramov
        </Text>
        <Text
          color="#8e8e8e"
          lineHeight="14px"
          fontSize="14px"
          textAlign="start"
        >
          Dan Abramov
        </Text>
      </Stack>
      <Spacer />
      <Text fontWeight="600" fontSize="12px" color="#0095f6" lineHeight="14px">
        Switch
      </Text>
    </Stack>
  );
}

export default MiniProfile;
