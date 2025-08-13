import Button from '../components/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HeroPage,
})

function HeroPage() {
  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-between items-center gap-4 my-0">
        <img
          sizes="(100vw - 20px) 100vw"
          className="ml-8"
          src="/src/assets/pokeball-icon 2.png"
          alt="Half pokeball image"
        />
        <div className="flex flex-col justify-center items-center gap-4 my-4">
          <img
            sizes="(222px - 61px) 61px"
            src="/src/assets/pokedex.png"
            alt="Pokedex image"
          />
          <h1 className="w-52 text-white text-left text-xl font-bold">
            Explore every Pokémon and their unique details.{' '}
            <Button className="mt-2">Let's go</Button>
          </h1>
        </div>
        <img
          className="ml-20 rotate-45"
          src="/src/assets/pokeball.png"
          alt="full pokeball image"
        />
      </div>
      <div className="flex justify-center md:justify-start items-center">
        <img
          src="/src/assets/Search 1.png"
          alt="Pokedex web app preview image"
        />
      </div>
    </div>
  )
}
