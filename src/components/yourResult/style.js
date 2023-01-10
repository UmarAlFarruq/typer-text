/* eslint-disable no-mixed-operators */
import styled, { keyframes } from "styled-components";
import { device } from './../../utils/responsive';

const getType = (type) => {
    switch (type) {
        case 'again': return {
            background: '#3cc1a3',
            marginLeft: 'auto',
            border: '2px solid #3cc1a3',
        }
        default: return {
            backgroundColor: '#ff9000',
            marginRight: 'auto',
            border: '2px solid #ff9000'
        }
    }
}

const AnimatsionPage = keyframes`
    0%{
        opacity: 1;
        transform: scale(0.5);
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
`
export const Containerr = styled.div`
    box-sizing: border-box;
    min-height: 200px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    animation:${AnimatsionPage} 1s linear;
    position: relative;
    @media ${device.mobile}{
        width: 98%;
        border-radius:8px;
        margin: 30px 0px ;
    }
    @media ${device.tablet}{
        width: 90%;
        border-radius:15px;
        margin: 40px 0 ;
    }
    @media ${device.dectop}{
        width: 98%;
        border-radius:20px;
    }
`
export const WrapperButton = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
`
export const InfoDiv = styled(Containerr)`
    background:#0068AF ;
    min-height: 250px;
    width: 100%;
    @media ${device.mobile}{
       margin-top: 15px;
    }
    @media ${device.tablet}{
        margin-top: 30px;
    }
    @media ${device.dectop}{
        margin-top: 40px;
    }
`
export const Button = styled.button`
    ${({ type }) => getType(type)}
    min-width: 120px;
    height: 45px; 
    padding:10px;
    font-weight: 800;
    border-radius: 5px;
    transition: .3s;
    color: white;
    :active{
        opacity:0.2;
        scale: 0.9;
    }
    :hover{
        cursor: pointer;
        color: black;
        background: none;
    }
`
export const WrapperInfo = styled.div`
    display: flex;
    @media ${device.mobile}{
        flex-direction: column;
        width: 95%;
    }
    @media ${device.tablet}{
        width:100%;
    }
`
export const ImgDiv = styled.div`
    width: 30%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid white;
    @media ${device.mobile} {
       display: none;
    }
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;

`
export const Title = styled.div`
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    border-bottom: 1px solid white;
    padding: 10px;
    color: white;
    padding-left: 20px;
    @media ${device.mobile}{
        width: 95%;
    }
    @media ${device.tablet}{
        width:100%;
    }
`
export const Info = styled.div`
    color: white;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const P = styled.span`
    font-family: monospace;
`

P.Title = styled.div`
    font-weight: 300;
    font-style: normal;
    color: whitesmoke;
    @media ${device.mobile}{
        font-size:14px;
    }
    @media ${device.tablet}{
        font-size:18px;
    }
`
P.Value = styled.div`
    font-weight: 600;
    font-style: normal;
    width :${({ width }) => width && `${width}%` || '35%'} ;
    margin-bottom :${({ mb }) => `${mb}px`} ;
    @media ${device.mobile}{
        font-size:14px;
    }
    @media ${device.tablet}{
        font-size:20px;
    }
`
export const Span = styled.p`
    font-size: 16px;
    margin: 2px 0;
    font-family: Montserrat sans-serif;
    margin-left: 7px;
    padding: 0px;
    font-weight: 500;
    color:black;
    line-height: 23px;
`
export const TimeIsUp = styled.div`
    width: 100%;
    height: 100%;
    font-size: 22px;
    font-weight: 900;
    font-style: normal;
    text-align: center;
    min-height: 150px;
    padding: 20px; 
    border-radius: 8px;
    position: relative;
    font-family: Montserrat sans-serif;
    `
export const WrapperTime = styled.div`
    opacity: 1;
    position: absolute;
    width: 80%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    z-index:2;
    background: white;
    border: 3px solid #d08383;
    padding: 15px 25px;
    top: 10px;
    left: 10%;
    opacity: ${({ hidden }) => hidden && '0'};
`
export const ButtonX = styled.div`
    
    position: absolute;
    border: 2px solid whitesmoke;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#d08383 ;
    color: white;
    top: -12px; 
    right:-2px;
    @media ${device.mobile}{
        width: 25px;
        height: 25px;
        font-size: 14px;
    }
    @media ${device.tablet}{
        width: 40px;
        height: 40px;
        font-size: 18px;
    }
`
