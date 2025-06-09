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
      <header className='header'>
        <div>
          <h1 className='h_logo'><Link to='/'> 로고</Link></h1>
          <nav className='h_nav' style={{display: 'flex', justifyContent: 'space-between'}}>
            <ul>
              <li><Link to='/component/brand'>브랜드</Link></li>
              <li><Link to='/component/distribute'>분양정보</Link></li>
              <li><Link to='/component/ground'>현장정보</Link></li>
              <li><Link to='/component/life'>라이프</Link></li>
              <li><Link to='/component/center'>고객센터</Link></li>
            </ul>
          </nav>
          <ul className='info_mn'>
            <li><a href=''></a></li>
            <li><a href=''></a></li>
          </ul>
        </div>
      </header>
        <div>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/component/brand" component={Brand}/>
          <Route path="/component/distribute" component={Distribute}/>
          <Route path="/component/ground" component={Ground}/>
          <Route path="/component/life" component={Life}/>
          <Route path="/component/center" component={Center}/>
        </div>
        <footer className='footer'>
          <h1 className='f_logo'>로고</h1>
          <nav className='f_nav'>
            <ul>
              <li><a href=''>이용약관</a></li>
              <li><a href=''>이메일무단수집거부</a></li>
              <li><a href=''>개인정보취급방침</a></li>
            </ul>
            <ul>
              <li><a href=''><img src=''/></a></li>
              <li><a href=''><img src=''/></a></li>
              <li><a href=''><img src=''/></a></li>
              <li><a href=''><img src=''/></a></li>
            </ul>
          </nav>
          <hr/>
          <span>주식회사 BS한양 | 사업자 등록번호 110-81-14611 |</span>
          <span>본사:(우)22758인천광역시 서구 청라한내로 110, 13층 4-비(청라동, 청라파이낸스센터)</span>
          <p>서울사무소:(우)05836 서울특별시 송파구 법원로 11길 12(문정동) BS한양타워</p>
          <p>Copyrightⓒ BS HANYANG CORPORATION Co., Ltd.All rights reserved.</p>

        </footer>
    </div>
  );
}

export default App;