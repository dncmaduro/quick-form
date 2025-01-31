import { SignUpForm } from '@/components/home/SignUpForm'
import { AppShell, Flex, Text, Title } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <AppShell className="h-screen w-screen">
      <Flex h="100%">
        <Flex
          align="center"
          justify="center"
          h="100%"
          className="grow"
          direction="column"
        >
          <Title order={1} className="h-min">
            Be tired of creating forms?
          </Title>
          <Text size="xl">
            Let <span className="font-bold text-blue-500">QuickForm</span> help
            you!
          </Text>
        </Flex>
        <Flex
          h="100%"
          className="grow rounded-[60px] border-l border-gray-200 bg-blue-50 shadow-md"
          align="center"
          justify="center"
          miw={600}
        >
          <SignUpForm />
        </Flex>
      </Flex>
    </AppShell>
  )
}
