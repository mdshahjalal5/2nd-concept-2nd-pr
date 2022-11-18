import React from 'react';
import Singleplayer from '../Singleplayer/Singleplayer';
import './Players.css'
const Players = ({players, cart, setCart}) => {
    // console.log(cart, setCart)
    return (
        <div>
          
          <div className="card-container">
            {players?.map(player=><Singleplayer key={player?.idPlayer} player={player}cart ={cart} setCart={setCart}></Singleplayer>)}
          </div>
        </div>
    );
};

export default Players;