import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Header';
import Intro from './Intro';
import InquiryList from './InquiryList';
import InquiryPost from './InquiryPost';
import MenuList from './MenuList';
import WritePost from './WritePost';
import Footer from './Footer';

import menuData from './data/data.json'
import serviceData from './data/service.json'
import inquiryData from './data/inquiry.json';

const Main = () => {
    return (
        <div>
        {/* <ServiceList data={service} /> */}
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Intro />} />
                    <Route path='/inquirylist' element={<InquiryList data={inquiryData}/>} />
                    <Route path='/inquirylist/:id' element={<InquiryPost data={inquiryData}/>} />
                    <Route path='/inquirylist/writepost' element={<WritePost data={inquiryData}/>} />
                    <Route path='/menulist' element={<MenuList data={menuData} />} />
                </Routes>
            {/* <Intro /> */}
            {/* <InquiryList data={inquiryData}/> */}
            {/* <MenuList data={data} /> */}
            <Header data={serviceData}/>
            <Footer />
        </BrowserRouter>
        </div>

    );
}

export default Main;