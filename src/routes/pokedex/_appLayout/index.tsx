import { createFileRoute } from '@tanstack/react-router'
import { Search } from 'lucide-react'

export const Route = createFileRoute('/pokedex/_appLayout/')({
  component: PokemonsPage,
})

function PokemonsPage() {
  return (
    <>
      <div className="flex w-full flex-col items-center pt-6">
        <img
          src="/src/assets/pokedex.png"
          alt="Pokedex image"
          className="mx-auto"
        />
        <div className="flex w-full max-w-2xl items-center justify-center gap-2 p-4">
          <input
            className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2"
            type="text"
            placeholder="Search your pokemon..."
          />
          <button className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600">
            <Search />
          </button>
        </div>
      </div>
    </>
  )
}
