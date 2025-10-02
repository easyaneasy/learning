import React from 'react'

export default function Form() {
  // 입력 요소를 객체로 관리할 상태
  const [form, setForm] = useState({
    username: "",
    age: 0,
    email: "",
  });

  // event 객체 : 발생한 이벤트의 정보를 속성으로 저장한 객체
  function handleChange(event) {
    // event 객체의 target 속성 : 이벤트가 발생한 요소 정보
    const target = event["target"];
    console.log(target);

    // target 객체에서 name 속성과 value 속성 꺼내서 출력
    // name : 요소의 name 속성 / value : 요소에 사용자가 입력한 값(value)
    const { name, value } = target;
    console.log(name, value);

    // form 객체 상태의 모양
    // {username: "", age: 0, email: ""}
    // 새로운 form 객체 생성
    // 계산된 속성명을 사용해서 속성명(key)를 변수 name로 대체
    const newForm = { ...form, [name]: value };

    // form 상태 변경(업데이트)
    setForm(newForm);
  }

  return (
    <div>
      <form>
        <input type="radio" name="group1" id="" />
        <input type="radio" name="group1" id="" />
        <input type="radio" name="group1" id="" />
        <br />
        <input type="radio" name="group2" id="" />
        <input type="radio" name="group2" id="" />
        <input type="radio" name="group2" id="" />

        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        {/* 3개의 input 요소의 값(value)을 상태로 관리  */}
        {/* input 요소의 value 속성은 사용자가 입력한 값 */}
        {/* 왼쪽 value: 속성 / 오른쪽 {변수} : 상태 변수  */}
        <input
          className="border-2"
          type="text"
          name="username"
          value={form["username"]}
          // 화살표 함수의 매개변수 event를
          onChange={(event) => {
            handleChange(event); // handleChange 에 전달한다
          }}
        />
        <input
          className="border-2"
          type="number"
          name="age"
          value={form["age"]}
          // 화살표 함수의 매개변수 event를
          onChange={(event) => {
            handleChange(event); // handleChange 에 전달한다
          }}
        />
        <input
          className="border-2"
          type="email"
          name="email"
          value={form["email"]}
          // 화살표 함수의 매개변수 event를
          onChange={(event) => {
            handleChange(event); // handleChange 에 전달한다
          }}
        />
      </form>
    </div>
  );
}
