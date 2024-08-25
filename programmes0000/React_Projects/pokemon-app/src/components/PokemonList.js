import React from 'react'
import Card from './Card'

const PokemonList = ({pokemon}) => {
  return (
    <div style={{display:"flex",flexWrap:"wrap",margin:"1rem"}}>
           {
           
              pokemon.map((p)=>{
                return <Card  name={p.name} url={p.url}/>
               })

            }
            
      
      
    </div>
  )
}

export default PokemonList
