import { usePokemonContext } from "./context/PokeContextProvider";
import PokeBall from "./components/PokeBall";
import Health from "./components/Health";

const App = () => {
  const { selectedPokemon, nextPokemon, prevPokemon, pokemonsData } =
    usePokemonContext();
  return (
    <main>
      <nav>
        <button onClick={prevPokemon}>
          <i className="fa-solid fa-caret-left"></i>
        </button>
        <h1>{selectedPokemon.name}</h1>
        <button onClick={nextPokemon}>
          <i className="fa-solid fa-caret-right"></i>
        </button>
      </nav>
      <img
        src={selectedPokemon.image}
        alt={selectedPokemon.name}
        className="pokePic"
      />

      <Health health={selectedPokemon.health} />

      <div className="pokeType">
        {selectedPokemon.types.map((type) => (
          <span key={type.name} style={{ backgroundColor: type.color }}>
            {type.name}
          </span>
        ))}
      </div>
      <div className="pokeBallWrapper">
        {pokemonsData?.map((pokemon, key) => (
          <PokeBall key={key} pokemon={pokemon} />
        ))}
      </div>
    </main>
  );
};

export default App;
