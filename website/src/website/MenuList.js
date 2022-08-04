import React, { useState } from 'react';
import Menu from './Menu';
import './MenuList.css'


import TypeList from './TypeList';
import typeData from './data/typeData.json'

const MenuList = (props) => {
    const data = props.data;

    // const { type, setType } = useState("coffee");

    return (
        <div>
            <TypeList data={typeData}/>
            <div className="list-div">
            {
                data.map( item =>
                    <Menu data={item}/>
                )
            }
        </div>
        </div>
        

    );
}

export default MenuList;