import React, { Component } from 'react';

// import './App.css';
// import { Button } from './components/button';
import Typo from './components/typography';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typo type="h1" align="center" style={ {color:"blue"} }>허각(Huh Gak) - 하늘을 달리다(Running in the Sky)</Typo>
        <Typo type="p" x2>
          <span>두근거렸지 누군가 나의 뒤를 쫓고있었고</span>
          검은 절벽 끝 더 이상 발 디딜 곳 하나 없었지 
          자꾸 목이 메어 간절히 네 이름을 되뇌었을 때 
          귓가에 울리는 그대의 
          뜨거운 목소리 그게 나의 구원이었어 
          <Typo inline bold>마른 하늘을 달려~ 나 그대에게 안길 수만 있으면 </Typo>
          내 몸 부서진대도 좋아 
          <Typo inline strike>설혹 너무 태양 가까이 날아</Typo>
          두 다리 모두 녹아 내린다고 해도 
          내맘 그대 마음속으로 
          <Typo x2>영원토록 달려갈거야 </Typo>
        </Typo>
      </div>
    );
  }
}

export default App;
