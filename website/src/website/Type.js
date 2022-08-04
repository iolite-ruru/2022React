import React from 'react';
// import './Type.css'

const Type = (props) => {

    const { name, type, img } = props.data;

    return (
        <div className='type-div'>
            {/* <img src={img}
                className='type-img'/> */}
            <h4>{name}</h4>
        </div>
    );
}

export default Type;