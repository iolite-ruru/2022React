import React from 'react';
// import './Type.css'

const Type = (props) => {

    const { name, type, img } = props.data;

    return (
        <div className='type-div'>
            {/* <img src={img}
                className='type-img'/> */}
            <p>{name}</p>
        </div>
    );
}

export default Type;