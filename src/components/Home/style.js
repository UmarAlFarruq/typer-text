import styled from 'styled-components'
import { device } from './../../utils/responsive';
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 15px;
    
    @media ${device.mobile} {
        margin-top: 10px;
    } 
    @media ${device.tablet} {
        margin-top: 25px;
    } 
    @media ${device.dectop} {
        margin-top: 30px;
    }   
`
export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    /* width: 76%; */
    border: 3px solid whitesmoke;
    min-height: 200px;
    height: fit-content;
    border-radius: 8px;
    transition: 0.5s;
    align-items: flex-end;
    box-sizing: border-box;
    :hover{
            box-shadow: rgba(100, 100, 111, 0.2) 0px 10px 35px 0px;
    }
    @media ${device.mobile} {
       width: 92%;
       padding: 8px;
       min-height: 150px;
       /* flex-direction: column; */
    } 
    @media ${device.tablet} {
        padding: 14px;
        min-height: 200px;
    } 
    @media ${device.dectop} {
        padding: 14px;
        min-height: 130px;
        width: 92%;
    } 
`
export const Content = styled.div`
    width: 60%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
`
export const WrapperText = styled.div`
    width: 100%;
`
export const Title = styled.h2`
    white-space: nowrap;
    font-size: 28px;
    font-family: sans-serif,;
    font-style: normal;
    font-weight: bold;
    @media ${device.mobile} {
        white-space: normal;
        font-size: 16px;
    }
    @media ${device.tablet} {
        white-space: normal;
        font-size: 22px;
    }
    @media ${device.dectop} {
        white-space: normal;
        font-size: 28px;
    }
`
export const P = styled.p`
    white-space: nowrap;
    font-size: 16px;
    font-family: sans-serif,;
    font-style: normal;
    font-weight: bold;
    color: #444;
    @media ${device.mobile} {
        white-space: normal;
        font-size: 12px;
    } 
    @media ${device.tablet} {
        white-space: normal;
        font-size: 14px;
    } 
    @media ${device.dectop} {
        font-size: 16px;
    } 
`
export const Img  = styled.img`
    
    @media ${device.mobile} {
        width: 30%;
        height: 50%;
    }
    @media ${device.tablet} {
        width: 32%;
        height: 80%;
    }
`