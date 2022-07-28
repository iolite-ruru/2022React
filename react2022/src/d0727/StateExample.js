import React from "react";

class StateExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            formData: 'no data'
        };
        this.handleData = this.handleData.bind(this);
        setInterval(this.handleData, 1000);
    }

    handleData() {
        let fixedLoading, fixedData;
        //const data = 'new data';
        const { loading, formData } = this.state;

        if(loading){
            fixedLoading = false;
            fixedData = 'new data';
        } else {
            fixedLoading = true;
            fixedData = 'no data';
        }

        this.setState({
            loading: fixedLoading,
            formData: fixedData
        });
        console.log('loading값: ', this.state.loading );
    }

    render() {
        return (
            <div>
                <h1>아래에 로딩 결과를 나타내는 화면입니다.</h1>
                <span>로딩중: { String(this.state.loading) }</span><br/>
                <span>결과: { String(this.state.formData) }</span>
            </div>
        )
    }
}

export default StateExample;