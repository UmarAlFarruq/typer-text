import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { device } from '../../utils/responsive'


const animateCar = keyframes`
    0%{
        margin-left:0px ;
    }
    100%{
        margin-left: 89%;
    }
`
const shina = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(1800deg);
    }
`

export const Container = styled.div`
    height: 90vh;
    width: 86%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.mobile} {
        width: 96%;
    }
    @media ${device.tablet} {
        width: 86%;
    }
`
export const Wrapper = styled.div`
    height: 49vh;
    /* width: 900px; */
    border-bottom: 1px dashed #764764;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    @media ${device.mobile} {
        width: 375px;
    }
    @media ${device.tablet} {
        width: 600px;
    }
    @media ${device.dectop} {
        width: 900px;
    }
`
export const WrapperImg = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    animation: ${animateCar} 8s ;
    @media ${device.mobile} {
        width: 37.5px;
        padding-bottom: 0.5px;
    }
    @media ${device.tablet} {
        width: 60px;
        padding-bottom: 1px;
    }
    @media ${device.dectop} {
        width: 90px;
        padding-bottom: 1px;
    }
`
export const ImgCar = styled.img`
    width: 100%;
`
export const ImgShina1 = styled.img`
    position: absolute;
    width: 25px;
    bottom: -6px;
    animation: ${shina} 8s;
    @media ${device.mobile} {
        width: 10px;
        left: 2px;
        bottom: -3px;
    }
    @media ${device.tablet} {
        width: 17px;
        left:3px ;
        bottom: -6px;
    }
    @media ${device.dectop} {
        width: 25px;
        left:5px ;
    }
`
export const ImgShina2 = styled.img`
    position: absolute;
    width: 25px;
    left: 55px;
    bottom: -6px;
    animation: ${shina} 8s;
    animation: ${shina} 8s;
    @media ${device.mobile} {
        width: 10px;
        left: 23px;
        bottom: -3px;
    }
    @media ${device.tablet} {
        width: 17px;
        left:36px ;
        bottom: -6px;
    }
    @media ${device.dectop} {
        width: 25px;
        left:55px ;
    }
`

