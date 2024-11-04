import { Link } from "react-router-dom";

export default function PokemonList (props) {
  return (
    <>
      <h2>Pokemon</h2>
      <ul>
        {props.pokemon.map((currentPokemon) => (
          <li key={currentPokemon.name}>
            <Link to={`/pokemon/${currentPokemon._id}`}> {currentPokemon.name}</Link>
            </li>
        ))}
      </ul>
    </>
  );
};

