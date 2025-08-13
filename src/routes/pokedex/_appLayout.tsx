import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pokedex/_appLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pokedex/appLayout"!</div>
}
