import { HomeLayout } from '@/components/layout/home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/your-forms/')({
  component: RouteComponent
})

function RouteComponent() {
  return <HomeLayout>Hello "/your-forms/"!</HomeLayout>
}
