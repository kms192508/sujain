import React from "react";
import styled from 'styled-components';

const Mainimg = styled.div`
    width: 100%;
    height: 500px;
    background-color: #bbe175;
    h1{font-size: 20px;}
`

const Sub_com1 = styled.div`
    width: 100%;
    height: 500px;
    background-color:rgb(43, 100, 110);
`

const Sub_com2 = styled.div`
    width: 100%;
    height: 500px;
    background-color:rgb(38, 64, 114);
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
    height: 500px;
    background-color:rgb(196, 154, 18);
`

const Sub_com4 = styled.div`
    width: 100%;
    height: 500px;
    background-color:rgb(141, 112, 87);
`

function Home(){
    return (
        <div className='Wrap'>
            <Mainimg className="mainimg">mainimg</Mainimg>
            <Sub_com1 className="sub_com1">
                <h1>Sub_com1</h1>
            </Sub_com1>
            <Sub_com2 className="sub_com2">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Sub_com2>
            <Sub_com3 className="sub_com3">sub_com3</Sub_com3>
            <Sub_com4 className="sub_com4">sub_com4</Sub_com4>
        </div>
    )
}

export default Home;