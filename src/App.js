import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import Home from './component/home'
import Brand from './component/brand'
import Distribute from './component/distribute'
import Ground from './component/ground'
import Life from './component/life'
import Center from './component/center'


function App() {
  return (
    <div className='wrap'>
      <header>
        <h1><Link to='/'> 로고</Link></h1>
        <nav>
          <ul>
            <li><Link to='/component/brand'>브랜드</Link></li>
            <li><Link to='/component/distribute'>분양정보</Link></li>
            <li><Link to='/component/ground'>현장정보</Link></li>
            <li><Link to='/component/life'>라이프</Link></li>
            <li><Link to='/component/center'>고객센터</Link></li>
          </ul>
        </nav>
        <ul>
          <li><a href=''></a></li>
          <li><a href=''></a></li>
        </ul>
      </header>
        <div>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/component/brand" component={Brand}/>
          <Route path="/component/distribute" component={Distribute}/>
          <Route path="/component/ground" component={Ground}/>
          <Route path="/component/life" component={Life}/>
          <Route path="/component/center" component={Center}/>
        </div>
   
    </div>
  );
}

export default App;