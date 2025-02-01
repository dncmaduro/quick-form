import { SignInForm } from '@/components/home/SignInForm'
import { SignUpForm } from '@/components/home/SignUpForm'
import { AppShell, Button, Flex, Text, Title } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: RouteComponent
})

function RouteComponent() {
  const [isSignIn, setIsSignIn] = useState(false)

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
          direction="column"
          gap={16}
        >
          {isSignIn ? <SignInForm /> : <SignUpForm />}
          <Button variant="subtle" onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? 'Or create new account' : 'Or sign in your account'}
          </Button>
        </Flex>
      </Flex>
    </AppShell>
  )
}
