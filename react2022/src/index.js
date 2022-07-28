import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Hello from './d0725/Hello';
// import Library from './d0725/Library';
// import Clock from './d0726/Clock';
// import MyComponent from './d0726/MyComponent';
// import TodaysPlan from './d0726/TodayPlan';
// import MyName from './d0726/MyName';
// import CommentList from './d0726/CommentList';
// import Counter from './d0727/Counter';
// import StateExample from './d0727/StateExample';
// import Say from './d0727/Say';
// import ConfirmButton from './d0728/ConfirmButton';
import EventPractice from './d0728/EventPractice';


// setInterval(() =>{
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById('root')022222222222222222222222222
//   );
// }, 1000);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Hello toWhat="soyeon"/> */}
    {/* <App /> */}
    {/* <Library /> */}
    {/* <Clock /> */}
    {/* <MyComponent /> */}
    {/* <TodaysPlan /> */}
    {/* <MyName name="노드">리액트</MyName> */}
    {/* <CommentList /> */}
    {/* <Counter /> */}
    {/* <StateExample /> */}
    {/* <Say /> */}
    {/* <ConfirmButton /> */}
    <EventPractice />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
