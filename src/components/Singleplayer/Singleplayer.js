import React from 'react';
import './Singplayer.css'
const Singleplayer = ({player, cart, setCart}) => {
    // console.log(cart, setCart);
    let {strCutout, strNationality,strPlayer, strStatus,idPlayer} = player;
    // console.log(idPlayer)
    const handleAddToCart = () =>{
        const info = {
            strNationality,
            strPlayer,
            strStatus,
            idPlayer,
            price:115
        };
        setCart([...cart, info])
    }
    const handleBookMark = (id) =>{
        const info = {
            strNationality,
            strPlayer,
            strStatus,
            idPlayer,
           quantity:115, 
            bookMark: 'true',
        };
        // console.log(info)
        const prevBookMark = localStorage.getItem('bookMark');
        const oldBookMark = JSON.parse(prevBookMark);
        if(oldBookMark){
            
        const isExist = oldBookMark.find(p=> p.idPlayer === idPlayer);
        // console.log(isExist)
             if(isExist){
                const updatedQuantity = parseFloat(isExist.quantity);
                const newUpdatedQuantity = updatedQuantity + 1;
                isExist.quantity = newUpdatedQuantity;
                // localStorage.setItem('bookMark', JSON.stringify([...oldBookMark, isExist])) //alternative the below lines 
                localStorage.setItem('bookMark', JSON.stringify(oldBookMark))

               
            // alert('Already exists');
            return;
            }
            else{

            localStorage.setItem('bookMark', JSON.stringify([...oldBookMark, info]))
            }
            
        }
        else{
            // console.log('bookmark nai' );
            localStorage.setItem('bookMark', JSON.stringify([info]))
        }
    }
    // console.log(cart)
    return (
        <div className='card ' data-aos="zoom-in">
            <h2>{strPlayer} </h2>
            <img src={strCutout} alt="" />
            <p>Nationality: {strNationality} </p>
            <p>Status: {strStatus} </p>
            <button onClick={handleAddToCart}>Add to Cart</button> 
            <button  onClick={() =>handleBookMark(idPlayer)}>Bookmark</button>
            
            
        </div>
    );
};

export default Singleplayer;
