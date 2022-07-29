import React from "react";

function Toolbar(props){
    const {isLoggedIn, onClickLogin, onClickLogout} = props;
    return (
        <div>
            { isLoggedIn
                ? "즐거운 시간 되세요~"
                : ""
            }

            { isLoggedIn
                ? ( <button onClick={onClickLogout}>로그아웃</button> )
                : ( <button onClick={onClickLogin}>로그인</button> )
            }
        </div>
    )
}

export default Toolbar;

// const Login = (props) => {
//     return (
//         <button onClick={props.onClick}>
//             로그인
//         </button>
//     );
// }

// const Logout = (props) => {
//     return (
//         <div>
//         즐거운 시간 되세요~!
//         <button onClick={props.onClick}>
//             로그아웃
//         </button>
//         </div>
//     );
// }

// export { Login, Logout };