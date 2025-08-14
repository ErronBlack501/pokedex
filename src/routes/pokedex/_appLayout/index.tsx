import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pokedex/_appLayout/')({
  component: PokemonsPage,
})

function PokemonsPage() {
  return <div>Hello "/pokedex/(app)/"!</div>
}
