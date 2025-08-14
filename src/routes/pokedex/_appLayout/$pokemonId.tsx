import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pokedex/_appLayout/$pokemonId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pokemons/$pokemonId"!</div>
}
