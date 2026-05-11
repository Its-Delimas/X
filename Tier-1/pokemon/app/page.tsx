import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] grid md:grid-cols-2">

      {/* Left — Hero */}
      <div className="flex flex-col justify-between px-14 py-14 border-r border-zinc-900">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="text-xs font-medium text-zinc-600 tracking-widest uppercase">
            Pokédex
          </span>
        </div>

        {/* Hero text */}
        <div className="py-10">
          <p className="text-xs font-medium text-red-500 tracking-widest uppercase mb-5">
            National Pokédex
          </p>
          <h1 className="font-black text-white leading-none mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(60px, 10vw, 88px)" }}>
            Catch<br />'em<br />
            <span className="text-red-500">all.</span>
          </h1>
          <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
            Browse, search and explore all 150 original Pokémon. Stats, types, abilities — everything in one place.
          </p>

          <div className="flex items-center gap-6 mt-10">
            <Link
              href="/pokedex"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Open Pokédex →
            </Link>
            <span className="text-sm text-zinc-600">Gen I · Kanto</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-8">
          {[
            { val: "150", label: "Pokémon" },
            { val: "18", label: "Types" },
            { val: "6", label: "Stats each" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-white">{s.val}</p>
              <p className="text-xs text-zinc-600 uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Card grid preview */}
      <div className="bg-[#0f0f0f] flex flex-col">

        <div className="flex justify-between items-center px-8 py-6 border-b border-zinc-900">
          <span className="text-xs text-zinc-600 uppercase tracking-widest">Featured</span>
          <span className="text-xs text-zinc-500 border border-zinc-800 rounded-full px-3 py-1">
            Gen I · Kanto
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 p-8 flex-1">
          {[
            { id: 25, name: "pikachu", type: "Electric", color: "text-yellow-400 bg-yellow-950" },
            { id: 6, name: "charizard", type: "Fire", color: "text-orange-400 bg-orange-950" },
            { id: 7, name: "squirtle", type: "Water", color: "text-blue-400 bg-blue-950" },
            { id: 150, name: "mewtwo", type: "Psychic", color: "text-pink-400 bg-pink-950" },
          ].map((p) => (
            <Link
              key={p.id}
              href={`/pokemon/${p.name}`}
              className="relative flex flex-col items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-red-500 rounded-xl p-5 transition-colors group"
            >
              <span className="absolute top-2.5 right-3 text-xs text-zinc-700">
                #{String(p.id).padStart(3, "0")}
              </span>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                alt={p.name}
                width={72}
                height={72}
                className="pixelated"
              />
              <span className="text-xs font-medium text-white capitalize">{p.name}</span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${p.color}`}>
                {p.type}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-between px-8 py-4 border-t border-zinc-900">
          <div className="flex items-center gap-3">
            <div className="w-28 h-0.5 bg-zinc-800 rounded-full">
              <div className="w-1/3 h-full bg-red-500 rounded-full" />
            </div>
            <span className="text-xs text-zinc-600">150 / 150 loaded</span>
          </div>
          <span className="text-xs text-red-400 border border-red-900 bg-red-950 rounded-full px-3 py-1">
            Live data
          </span>
        </div>
      </div>

    </main>
  )
}