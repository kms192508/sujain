import React from "react";
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.min.css"
import Distribute from "./distribute";

const Mainimg = styled.div`
    width: 100%;
    height: 760px;
    background-image: url(../image/mainimg1.jpg);
    h1{font-size: 20px;}
`
const Sub_com0 = styled.div`
    width: 100%;
    height: 800px;
    background-color: #a12sd;
    display: flex;
    justify-content: center;
    .sub0_h{
        width: 300px;
        margin-top: 150px;
        margin-right: 20px;
        span{
            display: block;
        }
    }
    .sub0_b{
        display: flex;
    }
    .sub0_b > div{
        width: 300px;
        height: 500px;
        margin: 100px 10px;
        border: 1px solid #ccc;
    }
`

const Sub_com1 = styled.div`
    width: 100%;
    height: 98px;
    display: flex;
    justify-content: center;
`

const Sub_com2 = styled.div`
    width: 100%;
    height: 700px;
    ul{
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: space-between;
    }
    ul > li{
        width: 30%;
    }
`

const Sub_com3 = styled.div`
    width: 100%;
    height: 400px;
`


function Home(){
    return (
        <div className='Wrap'>
            <Mainimg className="mainimg">
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <div className="slider1"></div>
                        <Carousel.Caption>
                            <div className="slider1_b" style={{width: '500px', height: '250px', backgroundColor: 'rgba(255, 255, 255, 0.2)', position: 'relative', left: '-700px', top: '-200px', margin: '0 auto'}}>
                                <h2>秀</h2>
                                <h3>SMART</h3>
                                <p>스마트한 주거 기술로 생활을 더 편안하게</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                    <div className="slider2"></div>
                        <Carousel.Caption>
                            <div className="slider2_b" style={{width: '500px', height: '250px', backgroundColor: 'rgba(255, 255, 255, 0.2)', position: 'relative', right: '-700px', top: '-200px', margin: '0 auto'}}>
                                <h2>自</h2>
                                <h3>Eco</h3>
                                <p>자연과 하나되어 당신의 순간을 더 아름답게</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                    <div className="slider3"></div>
                        <Carousel.Caption>
                            <div className="slider3_b" style={{width: '500px', height: '250px', backgroundColor: 'rgba(255, 255, 255, 0.2)', position: 'relative', left: '-700px', top: '-200px', margin: '0 auto', color: '#333'}}>
                                <h2>人</h2>
                                <h3>People</h3>
                                <p>함께하는 삶의 모든 이야기를 풍요롭게</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <div className="slider4"></div>
                        <Carousel.Caption>
                            <div className="slider4_b" style={{width: '1920px', height: '250px', backgroundColor: 'rgba(255, 255, 255, 0.2)', position: 'relative', left: '-300px', top: '-200px', lineHeight: '100px', color: '#333', fontSize: '48px'}}>
                                <p>秀, 自, 人의 품격있는 균형으로</p>
                                <span>더 나은일상을 함께합니다.</span>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Mainimg>
            <Sub_com0 className="sub_com0">
                <div className="sub0_h">
                    <span>Information on apartment complexes</span>
                    <h2>분양단지정보</h2>
                    <hr/>
                    <span>전체분양단지보기▶</span>
                    <span>분양캘린더 보기▶</span>
                </div>
                <div className="sub0_b">
                    <div>
                        <img src="" alt="" />
                        <span>2022년 5월</span>
                        <h3>청량리역 한양수자인 아트포레스트</h3>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <span>2022년 5월</span>
                        <h3>청량리역 한양수자인 아트포레스트</h3>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <span>2022년 5월</span>
                        <h3>청량리역 한양수자인 아트포레스트</h3>
                    </div>
                </div>
            </Sub_com0>
            <Sub_com1 className="sub_com1">
                    <div className="sub_com1-1">
                        MY 분양단지
                    </div>
                    <div className="sub_com1-2">
                        분양대금조회
                    </div>
                    <div className="sub_com1-3">
                        1:1문의
                    </div>
                    <div className="sub_com1-4">
                        회원정보관리
                    </div>
            </Sub_com1>
            <Sub_com2 className="sub_com2">
                <div className="sub2_b">
                    <div className="magazine">
                        <h2>MAGAZINE</h2>
                        <span>자세히보기</span>
                        <p><img src={require('./images/magazine.png')} alt="" /></p>
                        <div className="magazine_txt">
                            <h3>THE SUJAIN STORY</h3>
                            <p>매거진을 통해 만나는</p>
                            <p>수자인의 다양한 이야기</p>
                        </div>
                    </div>
                    <div className="news">
                        <h2>NEWS</h2>
                        <span>자세히보기</span>
                        <ul>
                            <li>'대전 문화공원 수자인' 6월 분양...</li>
                            <li>'대전 문화공원 수자인' 6월 분양...</li>
                            <li>'대전 문화공원 수자인' 6월 분양...</li>
                            <li>'대전 문화공원 수자인' 6월 분양...</li>
                            <li>'대전 문화공원 수자인' 6월 분양...</li>
                            <li>'대전 문화공원 수자인' 6월 분양...</li>
                        </ul>
                    </div>
                </div>
            </Sub_com2>
            <Sub_com3 className="sub_com3">
                <div className="sub3_t">
                    <div className="sub3_1"><img src={process.env.PUBLIC_URL+"/image/news.png"} alt="" />BS 뉴스룸</div>
                    <div className="sub3_2"><img src={process.env.PUBLIC_URL+"/image/insta.png"} alt="" />수자인 인스타그램</div>
                    <div className="sub3_1"><img src={process.env.PUBLIC_URL+"/image/youtube.png"} alt="" />채널 BS</div>
                </div>
                <div className="sub3_b">
                    <div className="sub3_2"><img src={process.env.PUBLIC_URL+"/image/blog.jpg"} alt="" />BS 블로그</div>
                    <div className="sub3_1"><img src={process.env.PUBLIC_URL+"/image/kakao.png"} alt="" />수자인 카카오채널</div>
                    <div className="sub3_2"></div>
                </div>
            </Sub_com3>
        </div>
    )
}

export default Home;