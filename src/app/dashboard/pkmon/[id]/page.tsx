import { Tokemon } from "@/app/pokemons/interfaces/pokemon";

interface Props {
  params: { id: string };
}

const getPokemon = async (id: string): Promise<Tokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache",
  }).then((resp) => resp.json());

  console.log("pokemon name:", pokemon.name);

  return pokemon;
};

export default async function PkmonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id);

  return (
    <div>
      <h1>{JSON.stringify(pokemon)}</h1>
    </div>
  );
}
