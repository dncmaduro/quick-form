import { HomeLayout } from '@/components/layout/home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/templates/')({
  component: RouteComponent
})

function RouteComponent() {
  return <HomeLayout>Hello "/templates/"!</HomeLayout>
}
