
export type NamedResource = {
  name: string
  url: string
}


export type PokemonType = {
  slot: number
  type: NamedResource
}


export type PokemonStat = {
  base_stat: number
  effort: number
  stat: NamedResource
}


export type PokemonAbility = {
  is_hidden: boolean
  slot: number
  ability: NamedResource
}

export type PokemonSprites = {
  front_default: string
  front_shiny: string
}

export type Pokemon = {
  id: number
  name: string
  height: number
  weight: number
  base_experience: number
  sprites: PokemonSprites
  types: PokemonType[]
  stats: PokemonStat[]
  abilities: PokemonAbility[]
}


export type PokemonListItem = {
  name: string
  url: string
}

export type PokemonListResponse = {
  count: number
  next: string | null
  previous: string | null
  results: PokemonListItem[]
}