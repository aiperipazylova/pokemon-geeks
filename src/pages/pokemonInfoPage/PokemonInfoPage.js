import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const PokemonInfoPage = () => {
    const { id } = useParams();
    const [ pokemonOne, setPokemonOne ] = useState(null);

    const getPokemon = async(id) => {
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

            setPokemonOne(data);
            return console.log(data, 'sdfsdfsdfsdf');
            ;
        } catch(e) {
            console.log('error'.e);
        } finally {
            console.log('final');
        }
    };
    useEffect(() => {
        getPokemon(id);
    }, [ id ]);


    return (
        <>
            {pokemonOne && <div>
                <h1>PokemonInfoPage {id}</h1>
                <p>name: {pokemonOne.name}</p>
                <p>abilities: {pokemonOne.abilities.map(value => value.ability.name).join(', ')}</p>
            </div>}
        </>

    );
};

export default PokemonInfoPage;