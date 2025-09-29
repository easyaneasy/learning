import React from 'react'

// props = {
//     user : {name: "홍길동", age: 20},
//     onClickProps: handleClick
// }

export default function Card({user, onClickProps}) {
  return (
    <div>
        {/* props로 전달받은 user를 매개변수로 전달 */}
        <button onClick={() => {onClickProps(user);}}>클릭</button>
    </div>
  )
}