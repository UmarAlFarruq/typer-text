import styled from 'styled-components'
import { device } from '../../utils/responsive'

export const Container = styled.select`
    border: 1px solid #e6e9ec;
    color: #0D263B;
    background: none;
    /* height: 44px;
    width: 100px; */
    text-align: center;
    font-size: 14px;
    @media ${device.mobile} {
        width: fit-content ;
        height:30px;
        padding: 6px 6px;
        font-size:12px;
        line-height:16px;
    }
    @media ${device.tablet} {
        width: 80px ;
        height:38px;
        padding:4px 8px;
        font-size:14px;
        line-height:20px;
    }
    @media ${device.dectop} {
        width: fit-content ;
        height:44px;
        width: 100px;
    }
`
export const OptionSelect = styled.option`
    border-bottom: 1px solid #0D263B;
    color: #0D263B;
    background: white;
    height: 32px;
    width: 100px;
    padding: 13px;
    margin-top: 3px;

`