import React, { useState } from 'react';
import Menu from './Menu';
import './css/MenuList.css'
import './css/CommonStyle.css'

import TypeList from './TypeList';
import typeData from './data/typeData.json'

const MenuList = (props) => {
    const data = props.data;

    // const { type, setType } = useState("coffee");

    return (
        <div className='outer-div'>
            <TypeList className='type-list-div' data={typeData}/>
            <div className="menu-list-div">
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