import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Pairs from './Components/Pairs/Pairs';
import TokenAddress from './Components/Token/TokenAddress';


function App() {
  const [active, setActive] = useState(1)

  

  const displayData = () => {
    switch(active){
      case 1:
        return <TokenAddress />
      case 2:
        return <Pairs />
      default: 
        return <TokenAddress />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background: rgb(107,58,180);
background: linear-gradient(90deg, rgba(107,58,180,1) 0%, rgba(253,29,67,1) 50%, rgba(109,69,252,1) 100%);
  position: relative;
  main{
    flex: 1;
   
    border: none;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
