// import React from "react";
import Card from "./Card";

function ProfileCard(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent:"center"
        }}>
        <Card title="Kim Soyeon" backgroundColor="#ddddee">
            <img src="https://avatars.githubusercontent.com/u/77036230?v=4"
            style={{
                marginRight: 8,
                float: "left",
                width: 80,
                height: 80,
                borderRadius: 100
            }}></img>
            <span>
                <p><b>Neuralworks Lab</b>: AI dept</p>
                
                s2023@e-mirim.hs.kr<br/>
                <a href="https://github.com/iolite-ruru">My GitHub</a>
            </span>

        </Card>
        </div>
    );
}

export default ProfileCard;