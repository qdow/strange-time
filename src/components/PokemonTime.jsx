// i know this is so ugly but i wanted to stop hotlinking to the images but then i couldnt for the life of me get a shorter import method to work and it's 4am and i thought this would be fast and easy but i've been working on this fruitlessly for hours and im so frustrated i want to Cry ugh sorry :((

import p0 from '../assets/pokemon/0.png';
import p1 from '../assets/pokemon/1.png';
import p2 from '../assets/pokemon/2.png';
import p3 from '../assets/pokemon/3.png';
import p4 from '../assets/pokemon/4.png';
import p5 from '../assets/pokemon/5.png';
import p6 from '../assets/pokemon/6.png';
import p7 from '../assets/pokemon/7.png';
import p8 from '../assets/pokemon/8.png';
import p9 from '../assets/pokemon/9.png';
import p10 from '../assets/pokemon/10.png';
import p11 from '../assets/pokemon/11.png';
import p12 from '../assets/pokemon/12.png';
import p13 from '../assets/pokemon/13.png';
import p14 from '../assets/pokemon/14.png';
import p15 from '../assets/pokemon/15.png';
import p16 from '../assets/pokemon/16.png';
import p17 from '../assets/pokemon/17.png';
import p18 from '../assets/pokemon/18.png';
import p19 from '../assets/pokemon/19.png';
import p20 from '../assets/pokemon/20.png';
import p21 from '../assets/pokemon/21.png';
import p22 from '../assets/pokemon/22.png';
import p23 from '../assets/pokemon/23.png';
import p24 from '../assets/pokemon/24.png';
import p25 from '../assets/pokemon/25.png';
import p26 from '../assets/pokemon/26.png';
import p27 from '../assets/pokemon/27.png';
import p28 from '../assets/pokemon/28.png';
import p29 from '../assets/pokemon/29.png';
import p30 from '../assets/pokemon/30.png';
import p31 from '../assets/pokemon/31.png';
import p32 from '../assets/pokemon/32.png';
import p33 from '../assets/pokemon/33.png';
import p34 from '../assets/pokemon/34.png';
import p35 from '../assets/pokemon/35.png';
import p36 from '../assets/pokemon/36.png';
import p37 from '../assets/pokemon/37.png';
import p38 from '../assets/pokemon/38.png';
import p39 from '../assets/pokemon/39.png';
import p40 from '../assets/pokemon/40.png';
import p41 from '../assets/pokemon/41.png';
import p42 from '../assets/pokemon/42.png';
import p43 from '../assets/pokemon/43.png';
import p44 from '../assets/pokemon/44.png';
import p45 from '../assets/pokemon/45.png';
import p46 from '../assets/pokemon/46.png';
import p47 from '../assets/pokemon/47.png';
import p48 from '../assets/pokemon/48.png';
import p49 from '../assets/pokemon/49.png';
import p50 from '../assets/pokemon/50.png';
import p51 from '../assets/pokemon/51.png';
import p52 from '../assets/pokemon/52.png';
import p53 from '../assets/pokemon/53.png';
import p54 from '../assets/pokemon/54.png';
import p55 from '../assets/pokemon/55.png';
import p56 from '../assets/pokemon/56.png';
import p57 from '../assets/pokemon/57.png';
import p58 from '../assets/pokemon/58.png';
import p59 from '../assets/pokemon/59.png';

function PokemonTime({ time }) {
    const pokemon = [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41, p42, p43, p44, p45, p46, p47, p48, p49, p50, p51, p52, p53, p54, p55, p56, p57, p58, p59]
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
