import { getPokemonList } from "@/lib/pokemon"
import Link from "next/link"

export default async function Pokedex() {
    const { results } = await getPokemonList()

    return (
        <main className="min-h-screen bg-zinc-950 px-6 py-12">
            <h1 className="text-3xl font-bold text-white mb-8">Pokédex</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {results.map((e) => (
                    <Link
                        key={e.name}
                        href={`/pokemon/${e.name}`}
                        className="flex flex-col items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-500 hover:bg-zinc-800 transition-all duration-150 group"
                    >
                        <p className="text-white font-medium capitalize group-hover:text-red-400 transition-colors">
                            {e.name}
                        </p>
                    </Link>
                ))}
            </div>
        </main>
    )
}