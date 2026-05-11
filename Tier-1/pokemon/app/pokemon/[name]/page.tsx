import { getPokemon } from "@/lib/pokemon";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: Promise<{ name: string }>
}

export default async function PokemonPage({ params }: Props) {
    const { name } = await params
    const pokemon = await getPokemon(name)

    return (
        <main className="min-h-screen bg-zinc-950 px-6 py-12">
            <Link href="/pokedex" className="text-sm text-zinc-400 hover:text-white transition-colors">
                Back
            </Link>

            <div className="mt-8 max-w-lg mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={128} height={128} className="mx-auto" />
                <h1 className="text-3xl font-bold text-white capitalize text-center mt-4">
                    {pokemon.name}
                </h1>
                <p className="text-zinc-400 text-center text-sm">#{pokemon.id}</p>

                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-zinc-800 rounded-xl p-4">
                        <p className="text-zinc-400">Height</p>
                        <p className="text-white font-medium">{pokemon.height / 10}m</p>
                    </div>
                    <div className="bg-zinc-800 rounded-xl p-4">
                        <p className="text-zinc-400">Weight</p>
                        <p className="text-white font-medium">{pokemon.weight / 10}kg</p>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-zinc-400 text-sm mb-2">Types</p>
                    <div className="flex gap-2">
                        {pokemon.types.map((t) => (
                            <span key={t.slot} className="px-3 py-1 rounded-full bg-zinc-800 text-white text-xs capitalize">
                                {t.type.name}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-zinc-400 text-sm mb-2">Abilities</p>
                    <p className="text-white text-sm capitalize">
                        {pokemon.abilities.map((a) => a.ability.name).join(", ")}
                    </p>
                </div>
            </div>
        </main>
    )
}