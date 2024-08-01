import { PokemonGrid, PokemonsReponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "poke Title",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokémons Favoritos<small>Global State</small>
      </span>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}
