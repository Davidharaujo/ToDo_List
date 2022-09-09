import React from "react";
import styled from 'styled-components'
import img from '../img/header-img.webp'

export const Container = styled.section `
    display: flex;
    background-color: #386641;
    width: 100%;
    height: 30vh;
`
export const Logo = styled.img `
    height: 35px;
    display: flex;
    margin-left: 30px;
    margin-top: 10px;
`

export const Titulo = styled.h1 `
    font-size: 35px;
    margin: 1px;
    font-weight: 700;
    color: #f2e8cf;
`

export const Chamada = styled.p`
    display: flex;
    align-self: center;
    justify-content: center;
    font-size: 35px;
    color: #f2e8cf;
    font-weight: bolder;
    margin: 30px;
    width: 50%;
    font-weight: 400;
`


export default function HS() {
    return(
        <div>
        </div>
    )
}