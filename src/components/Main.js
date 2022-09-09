import {React, useState} from "react";
import * as S from '../style/MainStyle.js'

export default function Main() {
    const [tarefas, setTarefas] = useState("")
    const [lista, setLista] = useState([])
    const tarefa = { tarefa: tarefas, id: Date.now()}

    
    const Add = ()=> {
    if(tarefas !== ""){
        setLista(antigaLista => [...antigaLista, tarefa])
    }
    setTarefas('')
    }
    console.table(lista)

    const Remove = (id) => {
        setLista(lista.filter((item)=> (item.id !== id)))
    }

    const RemoveAll = (id) => {
        setLista(lista.filter((item)=>(item.lista)))
    }
    return (
        <S.Container>
            <S.Formulario onSubmit={(e)=>{e.preventDefault()}}>
                <S.Input placeholder="Digite sua tarefa aqui" value={tarefas} onChange={(e)=>{setTarefas(e.target.value)}} />
                <S.Add onClick={() => Add()}>Adicionar Tarefa</S.Add>
                <S.Remove onClick={() => RemoveAll()}>Limpar Lista</S.Remove>
            </S.Formulario>
            <S.Tarefa>
            {lista.map((item)=> (
                <S.Caixa>
                        <S.Checkbox for='text' type="checkbox" />
                        <S.Task id="text">{item.tarefa}</S.Task>
                    <div>
                    <S.Delete onClick={() => Remove(item.id)}>Excluir</S.Delete>
                    </div>
                </S.Caixa>
            ))}
            </S.Tarefa>
        </S.Container>
    )
}