// 사용자에게 값을 입력받고 입력값만큼 전역상태 count 더하기

import { useState } from "react"

// 전역 상태를 변경하기 위해 필요한 두 가지 모듈
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../store/counterSlice";

export default function CounterIncrementByAmount() {
    // dispatch 함수 생성
    const dispatch = useDispatch();
    
    // 지역상태 payload 목적 : 사용자 입력 값 관리
    const [payload, setPayload] = useState(0);
    
    return (
        <div>
            <input 
                type="number" 
                value={payload}
                onChange={(e) => {
                    setPayload(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    // 액션 생성자 함수의 인자 === payload(상태를 얼마나 변경할지 결정하는 값)
                    dispatch(incrementByAmount(payload));
                }}
            >
                증가
            </button>
        </div>
    )
}
