const p_id = 1;
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${p_id}/`);
const data = await response.json();

console.log(data.sprites.front_default);
