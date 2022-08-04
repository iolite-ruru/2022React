import React from 'react';
import Service from './Service'
import './ServiceList.css'

const ServiceList = (props) => {
    const { data } = props;

    // const { type, setType } = useState("coffee");

    return (
        <div className="service-list-div">
            {/* <h1>asdf</h1> */}
            {
                data.map( item =>
                    <button className='service-btn'>{data.name}</button>
                )
            }
        </div>

    );
}

export default ServiceList;