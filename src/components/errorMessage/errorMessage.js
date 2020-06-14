import React from 'react';
import style from "styled-components";

const ErrorWrapper = style.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ErrorMessage = () => {
    return (
        <ErrorWrapper>
            <img src="./img/error.png" alt="Error" />
        </ErrorWrapper>
    )
}

export default ErrorMessage;