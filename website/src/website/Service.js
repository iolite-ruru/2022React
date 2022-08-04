import React from 'react';
import './Service.css'

const Service = (props) => {

    const { name } = props.data;

    return (
        <button className='service-btn'>{name}</button>
    );
}

export default Service;