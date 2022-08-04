import React from 'react';

import Header from './Header';
import Intro from './Intro';
import InquiryList from './InquiryList';
import MenuList from './MenuList';

import data from './data/data.json'
import service from './data/service.json'
import inquiryData from './data/inquiry.json';


const Main = () => {
    return (
        <div>
            <Header data={service}/>
            <Intro />
            <InquiryList data={inquiryData}/>
            
            <MenuList data={data} />
        </div>

    );
}

export default Main;