import React from 'react';
// import ReactDOM from 'react-dom';

class Hello extends React.Component{
    render(){
        return <div>Hello {this.props.toWhat}</div>
    }
}

export default Hello;