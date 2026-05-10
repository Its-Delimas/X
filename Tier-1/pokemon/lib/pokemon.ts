import type { Pokemon, PokemonListResponse } from "@/types/pokemon"

const POKEMON_BASE_URL = process.env.POKEAPI_BASE_URL

export async function getPokemonList(): Promise<PokemonListResponse> {
  const res = await fetch(`${POKEMON_BASE_URL}/pokemon?limit=150`)

  if (!res.ok) {
    throw new Error("Failed to fetch Pokémon list")
  }

  return res.json()
}

export async function getPokemon(name: string): Promise<Pokemon> {
  const res = await fetch(`${POKEMON_BASE_URL}/pokemon/${name}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch Pokémon: ${name}`)
  }

  return res.json()
}