import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Header';
import Intro from './Intro';
import InquiryList from './InquiryList';
import MenuList from './MenuList';

import data from './data/data.json'
import service from './data/service.json'
import inquiryData from './data/inquiry.json';

// import ServiceList from './ServiceList';
const Main = () => {
    return (
        <div>
        {/* <ServiceList data={service} /> */}
        <BrowserRouter>
            <Header data={service}/>
                <Routes>
                    <Route path='/' element={<Intro data={inquiryData}/>} />
                    <Route path='/inquirylist' element={<InquiryList data={inquiryData}/>} />
                    <Route path='/menulist' element={<MenuList data={data} />} />
                </Routes>
            {/* <Intro /> */}
            {/* <InquiryList data={inquiryData}/> */}
            {/* <MenuList data={data} /> */}
        </BrowserRouter>
        </div>

    );
}

export default Main;