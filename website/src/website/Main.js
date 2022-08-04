import React from 'react';
import data from './data.json'
import Header from './Header';
import TypeList from './TypeList';
import MenuList from './MenuList';

const Main = () => {
    return (
        <div>
            <Header />
            <TypeList />
            <MenuList data={data} />
        </div>

    );
}

export default Main;