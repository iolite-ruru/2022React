import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='div-outer'>
            <img className='logo' alt='logo' src='https://img.79plus.co.kr/megahp/common/img/logo.png'/>
            
            <div className='search-div'>
                <input type='text' placeholder='검색어 입력'
                    className='search-input'/>
                <button className='search-btn'>
                    <img className='search-img' src='https://icon-library.com/images/svg-search-icon/svg-search-icon-29.jpg'/>
                </button>
            </div>

        </div>
    )
}

export default Header;