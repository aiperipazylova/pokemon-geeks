import React, { useEffect, useState } from 'react';
import classes from './PokemonCard.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const PokemonCard = ({ pokemon }) => {
    const [ pokemonOne, setPokemonOne ] = useState(null);
    
    const [ show, setShow ] = useState(false);

    const handleInfo = () => <Link to={`/pokemon/1`}/>;

    const getPokemon = async(url) => {
        try {
            const { data } = await axios.get(url);

            setPokemonOne(data)
            return console.log(data, 'sdfsdfsdfsdf');
        } catch(e) {
            console.log('error'.e);
        } finally {
            console.log('final');
        }
    };

    useEffect(() => {
        getPokemon(pokemon.url);
    }, [ pokemon.url ]);


    return (
        <div className={classes.card}>
            {pokemon.name}

            {
                pokemonOne ? <img src={pokemonOne.sprites.other.dream_world.front_default} alt="pokemon"/>
            : <p>Pokemon</p>
            }
            {
                pokemonOne && <Link to={`/pokemon/${pokemonOne.id}`}>подробнее</Link>
            }

        </div>
    );
};

export default PokemonCard;