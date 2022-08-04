import React, { useState } from 'react';
import Menu from './Menu';
import './MenuList.css'

const MenuList = (props) => {
    const data = props.data;

    // const { type, setType } = useState("coffee");

    return (
        <div className="list-div">
            {
                data.map( item =>
                    <Menu data={item}/>
                )
            }
        </div>

    );
}

export default MenuList;