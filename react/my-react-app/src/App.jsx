import React from 'react';
import Rule from "./components/JSX/Rule";
import Interpolation from './components/JSX/Interpolation';
import Header from "./components/Header";

import OnClick from './components/EventHandling/onClick';
import OnChange from './components/EventHandling/onChange';
import OnSubmit from './components/EventHandling/onSubmit';

// import Parent from './components/Props/Parent';
import ProfileContainer from './components/PropsExample/ProfileContainer';
import CardContainer from './components/PropsFunction/CardContainer';
import FormContainer from './components/PropsFunction/FormContainer';

// 예시
import MyList from "./components/MyList";
import MyButton from './components/MyButton';

// Children
import Parent from './components/PropsChildren/Parent';

// condition
// import Container from './components/Condition/Container';

// list-rendering
import Container from './components/List/Container';


// App 컴포넌트는 Header, Rule, Interpolation 컴포넌트와 중첩됐댜.
export default function App() {

  return (
    <div>
      {/* 컴포넌트 태그 */}
      {/* <Header></Header>
      <Rule></Rule>
      <Interpolation></Interpolation> */}

      {/* 예시 */}
      {/* <MyList></MyList>
      <MyButton></MyButton> */}

      {/* <OnClick></OnClick>
      <OnChange></OnChange>
      <OnSubmit></OnSubmit> */}

      {/* <Parent></Parent> */}
      {/* <ProfileContainer></ProfileContainer> */}
      
      {/* <CardContainer></CardContainer> */}
      {/* <FormContainer></FormContainer> */}
      
      {/* <Parent></Parent> */}
      
      {/* condition */}
      {/* <Container></Container> */}

      {/* list-rendering */}
      <Container></Container>

    </div>
  );
}
