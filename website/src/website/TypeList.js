import React, { useState } from 'react';
import './css/TypeList.css'
import Type from './Type';

const TypeList = (props) => {

    const { data } = props;
    const [ typeState, setTypeState ] = useState("coffee");

    const onClickType = (e) => {
        setTypeState(e.target.name);
        console.log(e.target.name);
    }

    return (
        <div className='typeList-div'>
            {
                data.map( item =>
                    // <Type data={item}/>
                    <div className='type-div' >
                        {console.log(":"+item.type)}
                        <button className='type-btn' name={item.type}
                            onClick={onClickType}>
                            <p className='type-txt'>◾ {item.name}</p>
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default TypeList;