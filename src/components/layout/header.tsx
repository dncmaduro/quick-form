import { Box, Flex, Group, Text } from '@mantine/core'
import { Account } from './account'

export const Header = () => {
  return (
    <Box
      h={56}
      w="100%"
      className="fixed rounded-b-[24px] border-b border-blue-300 bg-white shadow-md"
    >
      <Flex mx={16} h="100%" align="center" justify="space-between">
        <Text className="!font-bold !text-blue-500" size="lg">
          QuickForm
        </Text>
        <Group align="center" gap="8">
          <Account />
        </Group>
      </Flex>
    </Box>
  )
}
