import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Players from '../Players/Players';
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
const Home = () => {
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState('');
    // console.log(players );
    const [cart, setCart] = useState([]);
    const datas = async()=>{
        const res = await fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`);
        const data = await res.json();
        setPlayers(data?.player);
    }
    useEffect(()=>{
        datas()
    },[search]);
        const handleDelete = (id) =>{ 
        const rest = cart.filter(single => single.idPlayer !==id);
        setCart([...rest])
        // console.log(rest, 'rest');
        toast("Wow so easy!");
        Swal.fire(
            'Good job!',
            'success',
            'Ami Md. Shahjalal!',
          )
    }

    return (
        <div>
            <div className="home-container">
                <div className="left-side">
                    <input onChange={(e)=>setSearch(e.target.value)} className='search-player' type="text" name="searc-player" id="search-player" placeholder='Search Player' />
                    <button className="search-btn">Search</button>

                    <div className="players-container">
                        <Players cart ={cart} setCart={setCart} players={players}></Players>
                    </div>
                </div>
                <div className="rigth-side">
                   <Cart cart={cart} handleDelete={handleDelete}></Cart>
                </div>
            </div>
        </div>
    );
};

// export default
export {Home};