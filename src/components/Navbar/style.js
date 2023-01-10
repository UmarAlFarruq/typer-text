import styled from 'styled-components'
import { device } from './../../utils/responsive';



export const Wrapper = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 15px;
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    
    @media ${device.mobile} {
      gap: 5px;
      padding: 4px;
    }
    @media ${device.tablet} {
       gap: 8px;
    }
`
export const Logo = styled.div`
    padding: 0;
    margin: 0;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    white-space: nowrap;
    @media ${device.mobile} {
       font-size: 22px;
    }
    @media ${device.tablet} {
        font-size: 24px;
        line-height: 38px;
    }
    @media ${device.dectop} {
        font-size: 28px;
        line-height: 44px;
    }
`
export const IMG = styled.img`
    /* margin-top: 5px; */
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    /* border: 0.3px solid #4449; */
    padding: 5px;
    @media ${device.mobile} {
        width: 30px;
        height: 30px;
       
    }
    @media ${device.tablet} {
        width: 38px;
        height: 38px;
    }
    @media ${device.dectop} {
        width: 44px;
        height: 44px;
    }
`