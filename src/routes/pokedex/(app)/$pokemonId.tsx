import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pokedex/(app)/$pokemonId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pokemons/$pokemonId"!</div>
}
