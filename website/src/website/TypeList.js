import React from 'react';
import './TypeList.css'
import Type from './Type';

const TypeList = (props) => {

    const typeData = props.data;

    return (
        <div className='typeList-div'>
            {/* <h1>TEST MSG</h1> */}
            {
                typeData.map( item =>
                    // <Type data={item}/>
                    <div className='type-div'>
                        {/* <img src={img}
                            className='type-img'/> */}

                            <button className='type-btn'><p className='type-txt'>◾ {item.name}</p></button>
                        
                    </div>
                )
            }
        </div>
    );
}

export default TypeList;