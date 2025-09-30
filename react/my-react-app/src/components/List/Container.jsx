import React from 'react'
import User from './User'

export default function Container() {
    // 반복 렌더링할 배열 데이터
    const array = [1, 2, 3, 4, 5];

    // id는 중복 X (가정)
    const userArray = [
        { id: 1, name: "우영" },
        { id: 2, name: "길동" },
        { id: 3, name: "철수" },
        { id: 4, name: "짱구" },
        { id: 5, name: "영희" },
    ];

    return (
        <div>
            {/* array 배열을 map()메서드로 반복 */}
            {array.map((element) => {
                // 원소를 li태그에 감싸서 반환
                return <li>{element}</li>
            })}

            {/* userArray를 map()을 활용해서 반복 */}
            {userArray.map((userElement) => {
                // 반복이 되는 대상이 되는 요소에 key 속성과 값을 설정해야한다.
                // key에 설정되는 값은 고유한 값이어야 한다.
                // 반복 렌더링에서 key 속성의 역할은
                // 동일하게 반복 생성된 컴포넌트를 구별하기 위한 속성
                return <User key={userElement.id} user={userElement}></User>
            })}
            
        </div>
    )
}
