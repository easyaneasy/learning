import React from 'react'
import Child from './Child'

export default function Parent() {
  return (
    <div>
        <Child>
            <div>
                <h1>홍길동</h1>
                <h2>20살</h2>
            </div>
        </Child>
        <Child>
            <div>
                <p>철수</p>
                <p>떡잎마을방범대</p>
            </div>
        </Child>
        <Child>
            <div>
                <h1>짱구</h1>
                <h2>짱구는 못말려</h2>
                <p>7살</p>
            </div>
        </Child>
    </div>
  )
}
