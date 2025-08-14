import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pokedex/_appLayout/games')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pokedex/_appLayout/games"!</div>
}
