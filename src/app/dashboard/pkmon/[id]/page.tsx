import { Tokemon } from "@/app/pokemons/interfaces/pokemon";
import { Metadata } from "next";
import { MdRampRight } from "react-icons/md";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, name } = await getPokemon(params.id);

  return {
    title: `#${id} - ${name}`,
    description: `Pagina del Pokemon ${name}`,
  };
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
      <h1>{pokemon.name}</h1>
    </div>
  );
}
