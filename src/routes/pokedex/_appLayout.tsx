import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { InfoIcon, Languages, Gamepad, Heart } from 'lucide-react'
import PokeballIcon from '../../components/pokeballIcon'
import { useState } from 'react'

export const Route = createFileRoute('/pokedex/_appLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <nav className="flex w-full flex-row items-center bg-[#DD092F] p-4 shadow-lg">
        {/* Logo Section - 20% */}
        <div className="flex w-1/5 items-center justify-start gap-2">
          <img
            src="/src/assets/Pokeball.png"
            alt="mini pokeball image"
            className="h-8 w-8 animate-pulse"
          />
          <h1 className="text-2xl font-bold text-white drop-shadow-md">
            Pokédex
          </h1>
        </div>

        {/* Navigation Links - 60% */}
        <div className="flex w-3/5 items-center justify-center gap-1">
          <Link to="/pokedex" activeOptions={{ exact: true }}>
            {({ isActive }) => (
              <div className="relative">
                <div
                  onMouseEnter={() => setHoveredLink('pokemon')}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`flex gap-1.5 rounded-md px-4 py-2.5 font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-[#3B82F6]'
                      : hoveredLink === 'pokemon'
                      ? 'bg-gray-50 text-[#3B82F6]'
                      : 'text-white'
                  }`}
                >
                  <PokeballIcon 
                    active={isActive} 
                    hover={hoveredLink === 'pokemon'} 
                  />
                  <span>Pokémons</span>
                </div>
                {/* Underline pour le lien actif */}
                {isActive && (
                  <div className="absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-[#3B82F6]" />
                )}
              </div>
            )}
          </Link>

          <Link to="/pokedex/games">
            {({ isActive }) => (
              <div className="relative">
                <div
                  onMouseEnter={() => setHoveredLink('games')}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`flex gap-1.5 rounded-md px-4 py-2.5 font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-[#3B82F6]'
                      : hoveredLink === 'games'
                      ? 'bg-gray-50 text-[#3B82F6]'
                      : 'text-white'
                  }`}
                >
                  <Gamepad className="h-5 w-5 transition-colors duration-200" />
                  <span>Games</span>
                </div>
                {/* Underline pour le lien actif */}
                {isActive && (
                  <div className="absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-[#3B82F6]" />
                )}
              </div>
            )}
          </Link>

          <Link to="/pokedex/favorites">
            {({ isActive }) => (
              <div className="relative">
                <div
                  onMouseEnter={() => setHoveredLink('favorites')}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`flex gap-1.5 rounded-md px-4 py-2.5 font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-[#3B82F6]'
                      : hoveredLink === 'favorites'
                      ? 'bg-gray-50 text-[#3B82F6]'
                      : 'text-white'
                  }`}
                >
                  <Heart className="h-5 w-5 transition-colors duration-200" />
                  <span>Favorites</span>
                </div>
                {/* Underline pour le lien actif */}
                {isActive && (
                  <div className="absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-[#3B82F6]" />
                )}
              </div>
            )}
          </Link>

          <Link to="/pokedex/about">
            {({ isActive }) => (
              <div className="relative">
                <div
                  onMouseEnter={() => setHoveredLink('about')}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`flex gap-1.5 rounded-md px-4 py-2.5 font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-[#3B82F6]'
                      : hoveredLink === 'about'
                      ? 'bg-gray-50 text-[#3B82F6]'
                      : 'text-white'
                  }`}
                >
                  <InfoIcon className="h-5 w-5 transition-colors duration-200" />
                  <span>About</span>
                </div>
                {/* Underline pour le lien actif */}
                {isActive && (
                  <div className="absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-[#3B82F6]" />
                )}
              </div>
            )}
          </Link>
        </div>

        {/* Right Section - 20% */}
        <div className="flex w-1/5 items-center justify-end gap-3">
          <button className="rounded-full p-2 transition-colors duration-200 hover:bg-red-700">
            <Languages className="h-5 w-5 text-white" />
          </button>
          <a
            href="https://github.com/ErronBlack501/pokedex"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 transition-colors duration-200 hover:bg-red-700"
          >
            <img
              className="h-5 w-5"
              src="/src/assets/github-mark-white.png"
              alt="github mark white"
            />
          </a>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}