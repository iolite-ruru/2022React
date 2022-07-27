import React from "react";

class TodaysPlan extends React.Component{
    render(){
        return (
            <div className="message-container">
                <h2>==오늘 계획==</h2>
                <h4>자세하게 적자. 한 페이지에 꽉 채워보자~</h4>
                <div>
                    1. 진짜 꼭 래쉬가드 사기<br/>
                    2. 기타 기깔나게 치기🎸<br/>
                    3. 끝내주게 잠자기<br/>
                    4. 그림 그리기<br/>
                    5. 3D 모델링 공부하기(제발)<br/>
                </div>
            </div>
        )
    }
}

export default TodaysPlan;