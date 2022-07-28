import React, { useState } from "react";

const ConfirmButton = () => {
    const [ isConfirmed, setIsConfirmed ] = useState(false);
    const handleConfirm = () => {
        setIsConfirmed((trigger) => !trigger); 
    }

    return (
        <div>
            <h1>출석 체크 하세요!</h1>
            <button onClick={ handleConfirm } disabled={ isConfirmed }>
                { (isConfirmed)?'확인됨':'출석체크' }
            </button>
        </div>
    )
}

export default ConfirmButton;