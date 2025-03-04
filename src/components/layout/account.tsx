import { ActionIcon, Avatar, Box, Text } from '@mantine/core'

export const Account = () => {
  return (
    <Box
      className="relative rounded-full border border-blue-500 bg-white"
      pl={8}
      pr={36}
    >
      <Text size="sm">Tran Manh Dung</Text>
      <ActionIcon
        color="blue"
        radius="xl"
        size="lg"
        className="!absolute top-[-8px] right-[-4px]"
      >
        <Avatar size="md" color="white" />
      </ActionIcon>
    </Box>
  )
}
