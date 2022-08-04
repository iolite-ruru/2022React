import React from 'react';
import './TypeList.css'
import Type from './Type';
import typeData from './typeData.json'

const TypeList = (props) => {

    return (
        <div className='typeList-div'>
            {/* <h1>TEST MSG</h1> */}
            {
                typeData.map( item =>
                    <Type data={item}/>
                )
            }
        </div>
    );
}

export default TypeList;