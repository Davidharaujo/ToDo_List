import React from "react";
import styled from 'styled-components'

export const Container = styled.section `
    display: flex;
    justify-content: center;
    margin: 20px;
`

export const Formulario = styled.form `
    display: flex;
    border-radius: 5px;
    height: 100vh;
    width: 30%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #a7c957;
`
export const Input = styled.input `
    margin-bottom: 30px;
    width: 25vw;
    height: 40px;
    font-size: 15px;
    border: none;
    border-radius: 5px;
    background-color: #f2e8cf;
`

export const Add = styled.button `
    margin-bottom: 20px;
    height: 7vh;
    width: 10vw;
    border-radius: 5px;
    font-size: 15px;
    color: white;
    background-color: #386641;
    border: none;
    cursor: pointer;
`
export const Remove = styled.button `
    height: 7vh;
    width: 10vw;
    border-radius: 5px;
    font-size: 15px;
    color: white;
    background-color: #bc4749;
    border: none;
    cursor: pointer;
`
export const Tarefa = styled.section `
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100vh;
`

export const Caixa = styled.div `
    display: flex;
    width: 100%;
    height: 10vh;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
    margin-bottom: 10px;
    background-color: #6a994e;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
`

export const Checkbox = styled.input `
    height: 20px;
    width: 20px;
`

export const Task = styled.label `
    font-size: 20px;
`

export const Delete = styled.button `
    height: 7vh;
    width: 7vw;
    border-radius: 5px;
    font-size: 15px;
    color: white;
    background-color: #bc4749;
    border: none;
    cursor: pointer;
`
export default function MS(){
    return(
        <div>

        </div>
    )
}