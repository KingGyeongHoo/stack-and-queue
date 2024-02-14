import React, { useState } from 'react';

function Stack() {
    //빈 배열로 stack의 초기값 생성
    let firstStack:number[] = []

    // useState를 통해 현재 stack의 상태와 상태 설정 함수를 만들어줌
    const [stack, setStack] = useState<number[]>(firstStack)
    // stack 안에 들어가는 데이터 번호와 상태 설정 함수를 만들어줌
    const [num, setNum] = useState<number>(0)

    // 데이터 추가
    function addData():void {
        // 데이터 번호를 1 더함
        setNum(num + 1)
        // 기존 stack의 맨 뒤에 새로운 데이터를 추가하여 새로운 stack을 만들고, 이를 현재 stack으로 변경
        let newStack:number[] = [...stack, num]
        setStack(newStack)
    }

    // 데이터 삭제
    function removeData():void {
        // 현재 데이터가 0보다 크다면 데이터 번호를 1 뺌
        if (num > 0) {
            setNum(num - 1)
        } 
        // 현재 데이터가 0보다 작거나 같다면, -로 넘어가지 않게 데이터 번호를 0으로 고정
        else {
            setNum(0)
        }
        // 현재 stack의 맨 마지막 요소를 제외한 배열을 stack으로 만듬
        setStack(stack.slice(0, stack.length - 1))
    }

    return (
        <div className='container'>
            <h1>스택</h1>
            <div className='button-container'>
                <button onClick={addData} className='button'>데이터 추가</button>
                <button onClick={removeData} className='button'>데이터 삭제</button>
            </div>
            <div className='data-container'>
                {stack.map(el => <Data innerText={el} />)}
            </div>

        </div>
    )
}

function Data({ innerText }: {innerText:number}) {
    return <div className='box'>데이터 번호<p>{innerText}</p></div>
}

export default Stack;
