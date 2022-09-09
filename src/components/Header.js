import {React, useState} from "react";
import * as S from '../style/HeaderStyle.js'
import check from '../img/check.png'

export default function Header() {
    return (
        <S.Container>
            <S.Logo src={check} alt="" />
            <S.Titulo>ToDo List</S.Titulo>
            <S.Chamada>Evite surpresas, faça sua lista diária.</S.Chamada>
        </S.Container>
    )
}