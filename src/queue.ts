// import { useState } from 'react';

// function Queue() {
//     //빈 배열로 queue의 초기값 생성
//     let firstQueue = []

//     // useState를 통해 현재 queue의 상태와 상태 설정 함수를 만들어줌
//     const [queue, setQueue] = useState(firstQueue)
//     // queue 안에 들어가는 데이터 번호와 상태 설정 함수를 만들어줌
//     const [num, setNum] = useState(0)
  
//     // 데이터 추가
//     function addData() {
//       // 데이터 번호를 1 더함
//       setNum(num + 1)
//       // 기존 queue의 맨 뒤에 새로운 데이터를 추가하여 새로운 queue를 만들고, 이를 현재 queue로 변경
//       let newQueue = [ ...queue, num]
//       setQueue(newQueue)
//     }
  

//     // 데이터 삭제
//     function removeData() {
//       // 현재 queue의 맨 마지막 요소를 제외한 배열을 queue로 만듬
//       setQueue(queue.slice(1, queue.length))
//   }
 
//     return (
//       <div className='container'>
//         <h1>큐</h1>
//         <div className='button-container'>
//           <button onClick={addData} className='button'>데이터 추가</button>
//           <button onClick={removeData} className='button'>데이터 삭제</button>
//         </div>
//         <div className='data-container'>
//           {queue.map(el => <Data innerText={el} />)}
//         </div>
  
//       </div>
//     )
//   }
  
//   function Data({ innerText }) {
//     return <div className='box'>데이터 번호<p>{innerText}</p></div>
// }
  
//   export default Queue;
  