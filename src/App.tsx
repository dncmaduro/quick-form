import { createRouter, RouterProvider } from '@tanstack/react-router'
import { Notifications } from '@mantine/notifications'
import { routeTree } from './routeTree.gen'

import './App.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createRouter({ routeTree })

const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
      <MantineProvider>
        <Notifications />
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
