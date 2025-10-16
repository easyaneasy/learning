import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
    // 사용자 입력 이메일 관리 상태
  const [email, setEmail] = useState("");
  // 사용자 입력 비밀번호 관리 상태
  const [password, setPassword] = useState("");
  // dispatch 함수
  const dispatch = useDispatch();
  // navigate 함수
  const navigate = useNavigate();

  const token = useSelector((state) => {
    return state.auth.token;
  });

  useEffect(() => {
    if(token){
        alert("로그인 성공");
        console.log(token);
        navigate("/");
    }
  })

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login({ email: email, password: password }));
  }

  // 로그인 폼 구조
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
}
