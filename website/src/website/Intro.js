import React from 'react';
import './Intro.css'

const Intro = () => {
    return (
        <div className='outer-c-div'>
            <div className='concept-div'>
                <div className='concept-txt'>
                    <div className='concept-title-div'>
                        MEGA MGC COFFEE CONCEPT
                    </div>
                    <div className='concept-about-div'>
                        <p>
                            메가MGC커피는, 커피 및 음료전문점으로 다양한 음료와 100% 아라비카 원두의 진한 커피를 맛 보실수 있습니다.
                        </p>
                        <p>
                            더 크고 더 맛있다!
                        </p>
                        <p>
                            빅사이즈에 우수한 품질의 커피&음료를 합리적인 가격으로 제공하여 부담없이 여유롭게 다양하고 착한 음료를 제공합니다.
                        </p>
                    </div>  
                </div>
                <img alt='메가커피 포스터' src='https://img.79plus.co.kr/megahp/common/img/brand01_1.jpg'
                    className='concept-img'/>
            </div>
            {/* <h1>MEGA BRAND</h1>
            <div>
                <p>BIG SIZE 2 SHOT</p>
                <p>빅사이즈와 착한가격의 데일리 커피</p>
            </div> */}
        </div>
    );
}

export default Intro;