import Button from '../components/button'
import { Route as pokemonsRoute } from './pokedex/_appLayout/index'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HeroPage,
})

function HeroPage() {
  return (
    <div className="grid h-screen w-full grid-cols-1 md:grid-cols-2">
      <div className="my-0 flex flex-col items-center justify-between gap-4">
        <img
          sizes="(100vw - 20px) 100vw"
          className="ml-8"
          src="/src/assets/pokeball-icon 2.png"
          alt="Half pokeball image"
        />
        <div className="my-4 flex flex-col items-center justify-center gap-4">
          <img
            sizes="(222px - 61px) 61px"
            src="/src/assets/pokedex.png"
            alt="Pokedex image"
          />
          <h1 className="w-52 text-left text-xl font-bold text-white">
            Explore every Pokémon and their unique details.{' '}
            <Link to={pokemonsRoute.to}>
              {' '}
              <Button className="mt-2">Let's go</Button>
            </Link>
          </h1>
        </div>
        <img
          className="ml-20 rotate-45"
          src="/src/assets/pokeball.png"
          alt="full pokeball image"
        />
      </div>
      <div className="flex items-center justify-center md:justify-start">
        <img
          src="/src/assets/Search 1.png"
          alt="Pokedex web app preview image"
        />
      </div>
    </div>
  )
}
