import type { FavoritePokemon } from "@/interfaces/favorite-pokemon.interface";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = (props) => {
  const [isVisible, setIsVisible] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`;

  const deleteFavorite = () => {
    const favoritePokemons: FavoritePokemon[] = JSON.parse(
      localStorage.getItem("favoritePokemons") ?? "[]"
    );

    const newFavoritePokemons = favoritePokemons.filter(
      (pokemon) => pokemon.id !== props.pokemon.id
    );

    localStorage.setItem(
      "favoritePokemons",
      JSON.stringify(newFavoritePokemons)
    );

    setIsVisible(false);
  };

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center">
        <a href={`/pokemons/${props.pokemon.name}`} class="text-blue-500">
          <img
            src={imageSrc}
            alt={props.pokemon.name}
            width={96}
            height={96}
            style={{ "view-transition-name": `image-${props.pokemon.name}` }}
          />
          <span>
            #{props.pokemon.id} {props.pokemon.name}
          </span>
        </a>

        <button onClick={deleteFavorite} class="text-red-400">
          Borrar
        </button>
      </div>
    </Show>
  );
};
