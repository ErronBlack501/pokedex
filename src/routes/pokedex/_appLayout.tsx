import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { InfoIcon, Languages, Gamepad, Heart } from 'lucide-react'
import PokeballIcon from '../../components/PokeballIcon'
import { useState } from 'react'

export const Route = createFileRoute('/pokedex/_appLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="min-h-screen w-full">
      <nav className="flex flex-row items-center justify-between gap-4 bg-[#DD092F] p-4 shadow-lg">
        {/* Logo Section */}
        <div className="flex items-center gap-2 bg-[#DD092F] p-4">
          <img
            src="/src/assets/Pokeball.png"
            alt="mini pokeball image"
            className="h-8 w-8 animate-pulse"
          />
          <h1 className="text-2xl font-bold text-white drop-shadow-md">
            Pokédex
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 rounded-lg bg-white p-0 shadow-inner">
          <Link to="/pokedex" activeOptions={{ exact: true }}>
            {({ isActive }) => (
              <div className="relative">
                <div
                  onMouseEnter={() => {
                    setIsHovered(true)
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false)
                  }}
                  className={`flex gap-1.5 rounded-md px-4 py-2.5 font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-[#3B82F6]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#3B82F6]'
                  }`}
                >
                  <PokeballIcon active={isActive} hover={isHovered} />
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
                  className={`flex gap-1.5 rounded-md px-4 py-2.5 font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-[#3B82F6]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#3B82F6]'
                  }`}
                >
                  <Gamepad className="h-6 w-6" />
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
                  className={`flex gap-1.5 rounded-md px-4 py-2.5 font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-[#3B82F6]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#3B82F6]'
                  }`}
                >
                  <Heart className="h-6 w-6" />
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
                  className={`flex gap-1.5 rounded-md px-4 py-2.5 font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-[#3B82F6]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#3B82F6]'
                  }`}
                >
                  <InfoIcon className="h-6 w-6" />
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

        {/* Right Section */}
        <div className="flex items-center justify-evenly gap-3 bg-[#DD092F] text-white">
          <button className="rounded-full p-2 transition-colors duration-200 hover:bg-red-700">
            <Languages className="h-5 w-5" />
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

      <Outlet />
    </div>
  )
}
