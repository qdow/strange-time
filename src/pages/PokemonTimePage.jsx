import PokemonTime from '../components/PokemonTime';

function PokemonTimePage({ time }) {
    return (
        <div className="page">
            <h1>— pokemon time! —</h1>
            <div className="time-blocks"><PokemonTime time={time} /></div>
            <p>Pokemon Time Babeyyy</p>
            <p>Hour, minute, and second represented by the pokemon of that number!</p>
            <p className="tiny">Pokemon sprites from <a href="https://github.com/PokeAPI/sprites" target="_blank">PokeAPI</a>.</p>
        </div>
    )
}

export default PokemonTimePage;