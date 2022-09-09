import React from 'react';
import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: #f2e8cf;
    font-family: 'Courier New', Courier, monospace;
}
`;
export default function Global(){
    return (
        <div>

        </div>
    )
}