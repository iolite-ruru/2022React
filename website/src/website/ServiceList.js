import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import './css/ServiceList.css'

const ServiceList = (props) => {
    const { data } = props;

    return (
        <div className="service-list-div">
            {/* <h1>whwyww</h1> */}
            {
                data.map( item => 
                    <Link to={item.link}>
                        <button className='service-btn'>{item.name}</button>
                    </Link>
                )
            }
            {/* <Link to='/menulist'>asf</Link>
            <Link to='/inquirylist'>ssssf</Link> */}
            {/* <Outlet/> */}
        </div>

    );
}

export default ServiceList;