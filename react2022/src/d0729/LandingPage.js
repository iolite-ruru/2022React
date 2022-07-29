import React, { useState } from "react";
import Toolbar from "./Toolbar";

const LandingPage = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onClickLogin = () => setIsLoggedIn(true);
    const onClickLogout = () => setIsLoggedIn(false);

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
             <h1>환상의 나라 리액트 나라로~</h1>
        </div>
    );
}


// import { Login, Logout } from "./Toolbar"
// const LandingPage = () => {
//     const { isLoggedIn, setIsLoggedIn } = useState(false);
//     const handlerButton = () => setIsLoggedIn(!isLoggedIn);
//     return (
//         <div>
//             {
//                 isLoggedIn ? 
//                     <Logout onClick={handlerButton}/>
//                     : <Login onClick={handlerButton}/>
//             }
//             <hr />
//             <h1>환상의 나라 리액트 나라로~</h1>
//         </div>
//     );
// }

export default LandingPage;