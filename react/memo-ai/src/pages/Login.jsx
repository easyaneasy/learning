import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
        <div>
            <p>로그인</p>
            <div>
                <p>Memo AI 계정이 없다면</p>
                <Link to="">회원가입</Link>
            </div>
            <div>
                <form>
                    <div>
                        <input type="email" />
                        <input type="text" />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
