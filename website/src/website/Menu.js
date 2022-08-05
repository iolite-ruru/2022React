import React from 'react';
import './css/Menu.css'

const Menu = (props) => {
    const  {name, kcal, about, price, img}  = props.data;

    return (
        <div className='a-menu'>
            <div>
                <img className='menu-img' alt={name} src={img} />
            </div>

            <div className='menu-txt-div'>
                <h3>{name}</h3>
                <hr/>
                <p className='menu-about'>{about} </p>
                {kcal} kcal <br/>
                {price}원
            </div>
        </div>
    );
}

export default Menu;