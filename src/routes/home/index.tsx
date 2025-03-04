import { HomeLayout } from '@/components/layout/home'
import { Box, Stack, TextInput, Title } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <HomeLayout>
      <Box h={400} w="100%" className="bg-blue-100" pt={60}>
        <Title order={1} className="text-center !text-blue-500" mt={56}>
          Create form easily and quickly
        </Title>
        <Stack gap={16}>
          <TextInput />
        </Stack>
      </Box>
    </HomeLayout>
  )
}
