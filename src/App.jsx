import { Route, Routes } from 'react-router'
import { useState } from 'react'
import PokemonList from './components/PokemonList/PokemonList'
import NavBar from './components/NavBar/NavBar'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'
import PokemonForm from './components/PokemonForm/PokemonForm'

const initialState = [
  { _id: 1, name: 'Bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'Ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'Venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'Charmander', weight: 85, height: 6 },
  { _id: 5, name: 'Charmeleon', weight: 190, height: 11 },
]

const App = () => {
  const [pokemon, setPokemon] = useState(initialState)

  const addPokemon = (newPokemonData) => {
    newPokemonData._id = pokemon.length + 1
    setPokemon([...pokemon, newPokemonData])
  }

  return (
    <>
      <h1>Pokemon!</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<h2>Home Page</h2>} />
        <Route path='/pokemon' element={<PokemonList pokemon={pokemon} />} />
        {/* route to add a pokemon with PokemonForm */}
        <Route
          path='/pokemon/new'
          element={<PokemonForm addPokemon={addPokemon} />}
        />
        {/* route to view a specific pokemon */}
        <Route
          path='/pokemon/:pokemonId'
          element={<PokemonDetails pokemon={pokemon} />}
        />
        {/* catch-all default route */}
        <Route path='*' element={<h2>Whoops, nothing here!</h2>} />
      </Routes>

    </>
  )
}



export default App
