import React from 'react';
import Rule from "./components/JSX/Rule";
import Interpolation from './components/JSX/Interpolation';
import Header from "./components/Header";

// 예시
import MyList from "./components/MyList";
import MyButton from './components/MyButton';

// App 컴포넌트는 Header, Rule, Interpolation 컴포넌트와 중첩됐댜.
export default function App() {
  return (
    <div>
      {/* 컴포넌트 태그 */}
      {/* <Header>

      </Header>

      <Rule>

      </Rule>

      <Interpolation>
        
      </Interpolation> */}

      {/* 예시 */}
      <MyList></MyList>
      <MyButton></MyButton>
    </div>
  );
}
