import pokemon from "../assets/pokemon";

function PokemonTime({ time }) {
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    
    return (
        <p>
            <img className="poke-pic" src={pokemon[hour]} /> : 
            <img className="poke-pic" src={pokemon[minute]} /> : 
            <img className="poke-pic" src={pokemon[second]} /> 
        </p>
    )
}

export default PokemonTime;
