import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pokedex/(app)/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pokedex/(app)/"!</div>
}
