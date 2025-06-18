import React from "react";
import styled from 'styled-components';
import ReactPlayer from "react-player";
// yarn add react-kakao-maps-sdk

const Brandlogo = styled.div`
    width: 100%;
    height: 1200px;
    padding-top: 200px;
    background-color: #ccc;
    .brand_b{
        text-align: center;
        p{
            margin: 30px 0;
            font-size: 20px;
        }
    }
`

const Corevalue = styled.div`
    width: 100%;
    height: 700px;
    background-color: #333;
    .core_b{
        display: flex;
        justify-content: center;
        div{
            width: 300px;
            background-color: #fff;
            height: 500px;
            margin: 0 10px;
            text-align: center;
            h2{
                margin-top: 20px;
                font-size: 50px;
            }
            p{
                margin-top: 100px;
                font-size: 20px;
            }
        }
        .eco{
            margin-top: 30px;
        }
    }
`

const Brandbody = styled.div`
    width: 100%;
    background-color: aquamarine;
    div{
        width: 100%;
        height: 500px;
    }
    .eco{
        text-align: right;
    }
`

function YouTubePlayer(){
    return(
        <div className="player-wrapper" style={{position: 'relative', paddingTop: '20px', paddingLeft: '450px'}}>
            <ReactPlayer
            // url="https://www.youtube.com/embed/동영상아이디"
            url="https://youtu.be/yEmJA1duZTI?list=TLGGscJ_AFGlh7AxNjA2MjAyNQ"
            playing
            muted
            loop
            width="1000px"
            height="500px"
            />
        </div>
    )
}

function Brand(){
    return (
        <div className="wrap">
            <Brandlogo>
                <div className="brand_b">
                    <span>.SUJAIN BRAND STORY</span>
                    <p>Balance for your life</p>
                    <span>더 나은 일상을 위한 균형</span>
                    <YouTubePlayer/>
                    <p>집에는 삶의 모든 것이 살고 있습니다. 그래서 집은 어느 하나 부족함 없이 채워져야 합니다.</p>
                    <p>수자인이 그리는 주거 공간은 기술, 환경, 사람의 ‘균형’으로 삶을 풍요롭게 채울 수 있는 공간입니다.</p>
                    <p>사람들은 모두 다릅니다. 사는 모습도, 라이프 스타일도, 삶을 바라보는 시각도,</p>
                    <p>우리는 단 하나의 ‘완벽한 균형’ 보다는 개개인에게 딱 맞는 ‘올바른 균형’을 지향합니다.</p>
                </div>
            </Brandlogo>
            <Corevalue>
                <span>Core Value</span>
                <p>秀, 自, 人의 품격 있는 균형으로 더 나은 당신의 일상을 함께합니다.</p>
                <div className="core_b">
                    <div>
                        <h2>秀</h2>
                        <p>SMART</p>
                        <p>스마트한 주거기술로 생활을 더 편안하게</p>
                    </div>
                    <div className="eco">
                        <h2>自</h2>
                        <p>ECO</p>
                        <p>자연과 하나되어 당신의 순간을 더 아름답게</p>
                    </div>
                    <div>
                        <h2>人</h2>
                        <p>PEOPLE</p>
                        <p>함께하는 삶의 모든 이야기를 더 풍요롭게</p>
                    </div>
                </div>
            </Corevalue>
            <Brandbody>
                <div className="smart">
                    <h1>Smart Life</h1>
                    <p>
                        수자인이 끊임없이 당신의 생활 공간에 내일의 기술을 채우는 이유는
                        생활의 편리함을 넘어, 순간의 편안함까지 전달하기 위함입니다.
                    </p>
                </div>
                <div className="eco">
                    <h1>Eco Space</h1>
                    <p>
                        수자인의 건축과, 조경 외부 공간이 자연을 먼저 생각하고 지어지는 이유는
                        치열한 도심 속 하루를 비워내고 자연의 아름다움과 여유를 전하고 싶기 때문입니다.
                    </p>
                </div>
                <div className="people">
                    <h1>People Story</h1>
                    <p>
                        수자인은 바랍니다.
                        사람과 사람의 이야기를 연결시켜 정서적 쉼을 제공하고 이러한 이야기들이 당신의 삶을
                        더욱 풍요롭고 조화롭게 채울수 있기를 바랍니다.
                    </p>
                </div>
            </Brandbody>
        </div>
    )
}

export default Brand;