import './App.css';
import PokemonsPage from './pages/PokemonsPage/PokemonsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonInfoPage from './pages/pokemonInfoPage/PokemonInfoPage';
import Menu from './components/menu/Menu';


function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path={'/pokemon'} element={<PokemonsPage/>}/>
                <Route path={'/pokemon/:id'} element={<PokemonInfoPage/>}/>
            </Routes>

        </BrowserRouter>
    );
}


export default App;
