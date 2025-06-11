import React from "react";
import { Map } from "react-kakao-maps-sdk"
// yarn add react-kakao-maps-sdk

function Brand(){
    return (
        <div>
            Brand
            <Map
            id="map"
            center={{
                // 지도의 중심좌표
                lat: 35.23908764501399,
                lng: 128.58360136188963,
            }}
            style={{
                // 지도의 크기
                width: "1000px",
                height: "500px",
            }}
            level={2} // 지도의 확대 레벨
            />
        </div>
    )
}

export default Brand;