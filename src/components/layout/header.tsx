import { Box, Flex, Group, Tabs, Text } from '@mantine/core'
import { Account } from './account'
import { Link } from '@tanstack/react-router'

export const Header = () => {
  const NAV_TABS = [
    {
      value: '/templates',
      label: 'Templates',
      href: '/templates'
    },
    {
      value: '/your-forms',
      label: 'Your Forms',
      href: '/your-forms'
    }
  ]

  console.log(window.location)

  return (
    <Box
      h={56}
      w="100%"
      className="fixed rounded-b-[16px] border-b border-blue-300 bg-white shadow-md"
    >
      <Flex mx={16} h="100%" align="center" justify="space-between">
        <Group>
          <Link to="/app">
            <Text className="!font-bold !text-blue-500" size="lg">
              QuickForm
            </Text>
          </Link>
          <Tabs variant="pills" value={window.location.pathname}>
            <Tabs.List>
              {NAV_TABS.map((tab) => (
                <Tabs.Tab key={tab.href} value={tab.value}>
                  <Link to={tab.href}>{tab.label}</Link>
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>
        </Group>
        <Group align="center" gap="8">
          <Account />
        </Group>
      </Flex>
    </Box>
  )
}
