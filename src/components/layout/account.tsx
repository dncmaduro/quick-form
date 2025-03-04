import { ActionIcon, Avatar, Box, Menu, Text } from '@mantine/core'
import { QIcon } from '../common/QIcon'

export const Account = () => {
  return (
    <Box
      className="relative rounded-full border border-blue-500 bg-white"
      pl={8}
      pr={36}
    >
      <Text size="sm">Tran Manh Dung</Text>
      <Menu>
        <Menu.Target>
          <ActionIcon
            color="blue"
            radius="xl"
            size="lg"
            className="!absolute top-[-8px] right-[-4px]"
          >
            <Avatar size="md" color="white" />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown w={180}>
          <Menu.Item leftSection={<QIcon name="User" size={14} />}>
            Profile
          </Menu.Item>
          <Menu.Item leftSection={<QIcon name="Settings" size={14} />}>
            Settings
          </Menu.Item>

          <Menu.Divider />

          <Menu.Item leftSection={<QIcon name="Power" size={14} />} color="red">
            Sign out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  )
}
