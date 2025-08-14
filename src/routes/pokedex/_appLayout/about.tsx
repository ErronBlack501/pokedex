import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pokedex/_appLayout/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pokedex/(app)/about"!</div>
}
