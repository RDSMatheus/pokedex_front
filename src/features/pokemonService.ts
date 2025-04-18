const pokeUrl = import.meta.env.VITE_API_URL;

export function GET_POKEMON_BY_NAME_OR_ID(name: string) {
  return {
    url: `${pokeUrl}pokemon/${name}`,
    options: {
      method: 'GET',
    },
  };
}

export function GET_ALL_POKEMON() {
  return {
    url: `${pokeUrl}pokemon/?limit=1025`,
    options: {
      method: 'GET',
    },
  };
}
