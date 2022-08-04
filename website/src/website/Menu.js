import React from 'react';
import './Menu.css'

const Menu = (props) => {
    const  {name, kcal, about, price, img}  = props.data;

    return (
        <div className='a-menu'>
            <img className='menu-img' alt={name} src={img} />
            <h3>{name}</h3>
            <hr/>
            <p className='menu-about'>{about} </p>
            {kcal} kcal <br/>
            {price}원
            
            
        </div>
    );
}

export default Menu;