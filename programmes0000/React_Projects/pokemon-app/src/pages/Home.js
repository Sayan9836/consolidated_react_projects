import React, { useEffect, useState } from 'react'
import PokemonList from '../components/PokemonList';
import axios from 'axios';
const Home = () => {
    const[pokemon,setPokemon]=useState([]);
    // const [currentPage,setCurrPage]=use
    useEffect(()=>{
       const URL="https://pokeapi.co/api/v2/pokemon";
       const fetchData=async()=>{
        await axios.get(URL)
        .then((res)=>setPokemon(res.data.results))
        .catch((err)=>console.log("error:",err));
        console.log(pokemon);
       }
       fetchData();
    },[])

  return (
    <div>
        <PokemonList pokemon={pokemon}/>
    </div>
  )
}

export default Home
