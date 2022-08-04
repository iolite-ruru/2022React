import React from 'react';
import './Inquiry.css'

const Inquiry = (props) => {
    const  { data }  = props;

    return (
        <div className='a-inquiry'>
            <tr><td>{data.id}</td>
                <td>[{data.type}] {data.title}</td>
                <td>{data.date}</td></tr>
                
        </div>
    );
}

export default Inquiry;