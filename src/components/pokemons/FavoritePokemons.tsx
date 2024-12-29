import type { FavoritePokemon } from "@/interfaces/favorite-pokemon.interface";
import { createSignal, For } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
  return JSON.parse(
    localStorage.getItem("favoritePokemons") ?? "[]"
  ) as FavoritePokemon[];
};

export const FavoritePokemons = () => {
  const [favoritePokemons] = createSignal(getLocalStoragePokemons());
  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      <For each={favoritePokemons()}>
        {(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
      </For>
    </div>
  );
};
